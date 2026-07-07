import { useState, useEffect, useMemo } from "react";
import { projectId, publicAnonKey } from '../../../utils/supabase/info';
import { Link, useNavigate } from "react-router";
import ShippingTab from "../components/ShippingTab";
import HomeProductsTab from "../components/HomeProductsTab";
import * as XLSX from 'xlsx';
import { canonicalizeBoxTicketType } from "../utils/ticketTypes";
import { BoxSetting, DEFAULT_BOX_DISPLAY_NAMES, DEFAULT_BOX_SETTINGS, useBoxSettings } from "../utils/boxSettings";
import { DEFAULT_SITE_RESOURCES, mergeSiteResources, SiteResourceSettings } from "../utils/siteResources";

type Tab = 'dashboard' | 'users' | 'products' | 'luckydraws' | 'shipping' | 'homeproducts' | 'boxsettings' | 'siteresources';
type TicketType = BoxSetting['ticketType'];

const TICKET_TYPE_NAMES: Record<TicketType, string> = DEFAULT_BOX_DISPLAY_NAMES;

const IMAGE_FALLBACK_SRC = 'https://via.placeholder.com/160?text=No+Image';

function isValidHttpUrl(value: string) {
  try {
    const url = new URL(value.trim());
    return url.protocol === 'http:' || url.protocol === 'https:';
  } catch {
    return false;
  }
}

function AdminImage({
  src,
  alt,
  className,
}: {
  src?: string;
  alt: string;
  className: string;
}) {
  return (
    <img
      src={src || IMAGE_FALLBACK_SRC}
      alt={alt}
      className={className}
      onError={(e) => {
        e.currentTarget.src = IMAGE_FALLBACK_SRC;
      }}
    />
  );
}

// 🔐 관리자 API 호출 헤더 (모든 컴포넌트에서 사용 가능)
const getAuthHeaders = () => {
  const adminSecret = sessionStorage.getItem('admin_secret');
  
  if (!adminSecret) {
    return null;
  }
  
  return {
    'Authorization': `Bearer ${publicAnonKey}`,
    'X-Admin-Secret': adminSecret,
  };
};

export default function Admin() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<Tab>('dashboard');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isChecking, setIsChecking] = useState(true);
  const { activeBoxSettings, displayNames } = useBoxSettings();
  
  // 🔥 관리자 인증 체크
  useEffect(() => {
    const checkAuth = async () => {
      const authenticated = sessionStorage.getItem('admin_authenticated');
      const loginTime = sessionStorage.getItem('admin_login_time');
      const adminSecret = sessionStorage.getItem('admin_secret');

      if (!authenticated || authenticated !== 'true') {
        navigate('/admin/login');
        return;
      }
      
      if (!adminSecret) {
        sessionStorage.clear(); // 세션 클리어
        navigate('/admin/login');
        return;
      }
      
      // 세션 유효 시간 체크 (2시간)
      if (loginTime) {
        const elapsed = Date.now() - parseInt(loginTime);
        const twoHours = 2 * 60 * 60 * 1000;
        
        if (elapsed > twoHours) {
          sessionStorage.removeItem('admin_authenticated');
          sessionStorage.removeItem('admin_login_time');
          sessionStorage.removeItem('admin_secret');
          navigate('/admin/login');
          return;
        }
      }

      setIsAuthenticated(true);
      setIsChecking(false);
    };
    
    checkAuth();
  }, [navigate]);
  
  const handleLogout = () => {
    sessionStorage.removeItem('admin_authenticated');
    sessionStorage.removeItem('admin_login_time');
    sessionStorage.removeItem('admin_secret');
    navigate('/');
  };
  
  // 인증 체크 중
  if (isChecking) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-gray-300 border-t-black rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">권한을 확인하는 중...</p>
        </div>
      </div>
    );
  }
  
  // 인증되지 않음
  if (!isAuthenticated) {
    return null;
  }
  
  return (
    <div className="min-h-screen bg-[#f8f9fa]">
      {/* 헤더 */}
      <div className="bg-white border-b border-[#e5e7eb] sticky top-0 z-20 shadow-sm">
        <div className="mx-auto max-w-[1920px] px-4 sm:px-6 xl:px-8">
          <div className="flex min-h-[64px] flex-col justify-center gap-3 py-3 sm:h-[72px] sm:flex-row sm:items-center sm:justify-between sm:py-0">
            <div className="flex items-center gap-3 sm:gap-6">
              <Link to="/" className="text-[#6b7280] hover:text-[#111827] transition-colors font-['Pretendard:Medium',sans-serif] text-[13px] sm:text-[14px]">
                ← 홈으로
              </Link>
              <div className="h-[18px] w-[1px] bg-[#e5e7eb]" />
              <h1 className="text-[20px] font-['Pretendard:Bold',sans-serif] text-[#111827] sm:text-[24px]">관리자 대시보드</h1>
            </div>
            <button
              onClick={handleLogout}
              className="self-start rounded-[8px] px-[12px] py-[8px] text-[13px] text-[#6b7280] transition-all hover:bg-[#fef2f2] hover:text-[#ef4444] font-['Pretendard:Medium',sans-serif] sm:self-auto sm:px-[16px] sm:py-[10px] sm:text-[14px]"
            >
              로그아웃
            </button>
          </div>
        </div>
      </div>

      {/* 탭 네비게이션 */}
      <div className="bg-white border-b border-[#e5e7eb] sticky top-[104px] z-10 sm:static">
        <div className="mx-auto max-w-[1920px] px-4 sm:px-6 xl:px-8">
          <nav className="flex gap-2 overflow-x-auto py-2 sm:gap-[32px] sm:py-0">
            <button
              onClick={() => setActiveTab('dashboard')}
              className={`shrink-0 rounded-full px-3 py-2 border-b-[3px] font-['Pretendard:SemiBold',sans-serif] text-[13px] transition-all sm:rounded-none sm:py-[16px] sm:px-[4px] sm:text-[15px] ${
                activeTab === 'dashboard'
                  ? 'border-[#111827] bg-[#111827] text-white sm:bg-transparent sm:text-[#111827]'
                  : 'border-transparent text-[#6b7280] hover:text-[#111827] hover:border-[#d1d5db]'
              }`}
            >
              📊 대시보드
            </button>
            <button
              onClick={() => setActiveTab('users')}
              className={`shrink-0 rounded-full px-3 py-2 border-b-[3px] font-['Pretendard:SemiBold',sans-serif] text-[13px] transition-all sm:rounded-none sm:py-[16px] sm:px-[4px] sm:text-[15px] ${
                activeTab === 'users'
                  ? 'border-[#111827] bg-[#111827] text-white sm:bg-transparent sm:text-[#111827]'
                  : 'border-transparent text-[#6b7280] hover:text-[#111827] hover:border-[#d1d5db]'
              }`}
            >
              👥 회원 관리
            </button>
            <button
              onClick={() => setActiveTab('products')}
              className={`shrink-0 rounded-full px-3 py-2 border-b-[3px] font-['Pretendard:SemiBold',sans-serif] text-[13px] transition-all sm:rounded-none sm:py-[16px] sm:px-[4px] sm:text-[15px] ${
                activeTab === 'products'
                  ? 'border-[#111827] bg-[#111827] text-white sm:bg-transparent sm:text-[#111827]'
                  : 'border-transparent text-[#6b7280] hover:text-[#111827] hover:border-[#d1d5db]'
              }`}
            >
              🎁 상품 관리
            </button>
            <button
              onClick={() => setActiveTab('luckydraws')}
              className={`shrink-0 rounded-full px-3 py-2 border-b-[3px] font-['Pretendard:SemiBold',sans-serif] text-[13px] transition-all sm:rounded-none sm:py-[16px] sm:px-[4px] sm:text-[15px] ${
                activeTab === 'luckydraws'
                  ? 'border-[#111827] bg-[#111827] text-white sm:bg-transparent sm:text-[#111827]'
                  : 'border-transparent text-[#6b7280] hover:text-[#111827] hover:border-[#d1d5db]'
              }`}
            >
              🎲 럭키드로우
            </button>
            <button
              onClick={() => setActiveTab('shipping')}
              className={`shrink-0 rounded-full px-3 py-2 border-b-[3px] font-['Pretendard:SemiBold',sans-serif] text-[13px] transition-all sm:rounded-none sm:py-[16px] sm:px-[4px] sm:text-[15px] ${
                activeTab === 'shipping'
                  ? 'border-[#111827] bg-[#111827] text-white sm:bg-transparent sm:text-[#111827]'
                  : 'border-transparent text-[#6b7280] hover:text-[#111827] hover:border-[#d1d5db]'
              }`}
            >
              📦 배송 관리
            </button>
            <button
              onClick={() => setActiveTab('homeproducts')}
              className={`shrink-0 rounded-full px-3 py-2 border-b-[3px] font-['Pretendard:SemiBold',sans-serif] text-[13px] transition-all sm:rounded-none sm:py-[16px] sm:px-[4px] sm:text-[15px] ${
                activeTab === 'homeproducts'
                  ? 'border-[#111827] bg-[#111827] text-white sm:bg-transparent sm:text-[#111827]'
                  : 'border-transparent text-[#6b7280] hover:text-[#111827] hover:border-[#d1d5db]'
              }`}
            >
              🏠 홈 메인 상품
            </button>
            <button
              onClick={() => setActiveTab('boxsettings')}
              className={`shrink-0 rounded-full px-3 py-2 border-b-[3px] font-['Pretendard:SemiBold',sans-serif] text-[13px] transition-all sm:rounded-none sm:py-[16px] sm:px-[4px] sm:text-[15px] ${
                activeTab === 'boxsettings'
                  ? 'border-[#111827] bg-[#111827] text-white sm:bg-transparent sm:text-[#111827]'
                  : 'border-transparent text-[#6b7280] hover:text-[#111827] hover:border-[#d1d5db]'
              }`}
            >
              🧰 상자 설정
            </button>
            <button
              onClick={() => setActiveTab('siteresources')}
              className={`shrink-0 rounded-full px-3 py-2 border-b-[3px] font-['Pretendard:SemiBold',sans-serif] text-[13px] transition-all sm:rounded-none sm:py-[16px] sm:px-[4px] sm:text-[15px] ${
                activeTab === 'siteresources'
                  ? 'border-[#111827] bg-[#111827] text-white sm:bg-transparent sm:text-[#111827]'
                  : 'border-transparent text-[#6b7280] hover:text-[#111827] hover:border-[#d1d5db]'
              }`}
            >
              🎬 리소스 설정
            </button>
          </nav>
        </div>
      </div>

      {/* 탭 컨텐츠 */}
      <div className="mx-auto max-w-[1920px] px-4 py-[20px] sm:px-6 sm:py-[32px] xl:px-8">
        {activeTab === 'dashboard' && <DashboardTab isAuthenticated={isAuthenticated} />}
        {activeTab === 'users' && <UsersTab isAuthenticated={isAuthenticated} />}
        {activeTab === 'products' && <ProductsTab isAuthenticated={isAuthenticated} boxSettings={activeBoxSettings} displayNames={displayNames} />}
        {activeTab === 'luckydraws' && <LuckyDrawsTab isAuthenticated={isAuthenticated} />}
        {activeTab === 'shipping' && <ShippingTab isAuthenticated={isAuthenticated} />}
        {activeTab === 'homeproducts' && <HomeProductsTab isAuthenticated={isAuthenticated} boxSettings={activeBoxSettings} displayNames={displayNames} />}
        {activeTab === 'boxsettings' && <BoxSettingsTab isAuthenticated={isAuthenticated} />}
        {activeTab === 'siteresources' && <SiteResourcesTab isAuthenticated={isAuthenticated} />}
      </div>
    </div>
  );
}

// ============================================
// 대시보드 탭
// ============================================
function DashboardTab({ isAuthenticated }: { isAuthenticated: boolean }) {
  const [stats, setStats] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (isAuthenticated) {
      fetchStats();
    }
  }, [isAuthenticated]);

  const fetchStats = async () => {
    try {
      const headers = getAuthHeaders();
      if (!headers) return; // 🚨 헤더가 null이면 종료
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-53dba95c/admin/stats`,
        {
          method: 'GET',
          headers,
          mode: 'cors',
          cache: 'no-cache',
        }
      );
      
      if (!response.ok) {
        const data = await response.json();
        console.error('❌ [fetchStats] Error:', data);
        alert(`❌ 관리자 권한이 없습니다: ${data.error || response.statusText}`);
        return;
      }
      
      const data = await response.json();
      setStats(data.stats);
    } catch (error) {
      console.error('Error fetching stats:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div className="text-center py-12">로딩 중...</div>;
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">전체 통계</h2>
      
      <div className="flex flex-col gap-5">
        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <span className="text-3xl">👥</span>
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">전체 회원 수</dt>
                  <dd className="text-3xl font-semibold text-gray-900">{stats?.totalUsers || 0}</dd>
                </dl>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <span className="text-3xl">💰</span>
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">총 포인트 충전액</dt>
                  <dd className="text-3xl font-semibold text-gray-900">{(stats?.totalPointsCharged || 0).toLocaleString()}P</dd>
                </dl>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <span className="text-3xl">🎫</span>
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">박스 판매 수</dt>
                  <dd className="text-3xl font-semibold text-gray-900">{stats?.totalTicketsSold || 0}</dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white shadow rounded-lg p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">⚠️ 관리자 알림</h3>
        <div className="space-y-2 text-sm text-gray-600">
          <p>• 상품 관리 탭에서 박스별 당첨 상품을 추가/수정할 수 있습니다.</p>
          <p>• 회원 관리 탭에서 포인트를 직접 충전할 수 있습니다.</p>
          <p>• 럭키드로우 탭에서 이벤트를 생성하고 당첨자를 선정할 수 있습니다.</p>
        </div>
      </div>
    </div>
  );
}

// ============================================
// 회원 관리 탭
// ============================================
function UsersTab({ isAuthenticated }: { isAuthenticated: boolean }) {
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedUser, setSelectedUser] = useState<any>(null);
  const [pointAmount, setPointAmount] = useState(100000);
  const [pointDescription, setPointDescription] = useState('관리자 포인트 충전');

  useEffect(() => {
    if (isAuthenticated) {
      fetchUsers();
    }
  }, [isAuthenticated]);

  const fetchUsers = async () => {
    try {
      const headers = getAuthHeaders();
      if (!headers) return; // 🚨 헤더가 null이면 종료
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-53dba95c/admin/users`,
        {
          headers,
        }
      );
      const data = await response.json();
      
      if (!response.ok) {
        console.error('Admin API error:', data);
        alert(`❌ 관리자 권한이 없습니다: ${data.error || response.statusText}`);
        return;
      }
      
      setUsers(data.users || []);
    } catch (error) {
      console.error('Error fetching users:', error);
      alert(`❌ 에러: ${error}`);
    } finally {
      setLoading(false);
    }
  };

  const handleAddPoints = async (kakaoId: string) => {
    try {
      const headers = getAuthHeaders();
      if (!headers) {
        alert('❌ 인증 정보가 없습니다. 다시 로그인해주세요.');
        return;
      }
      
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-53dba95c/user/${kakaoId}/points/add`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            ...headers,
          },
          body: JSON.stringify({
            amount: pointAmount,
            description: pointDescription,
          }),
        }
      );

      const data = await response.json();

      if (data.success) {
        alert(`✅ 성공! 현재 포인트: ${data.points.toLocaleString()}P\n\n💡 팁: 앱에서 포인트가 안 보이면 포인트 페이지 우측 상단의 새로고침 버튼(🔄)을 눌러주세요!`);
        fetchUsers(); // 목록 새로고침
        setSelectedUser(null);
      } else {
        alert(`❌ 실패: ${data.error}`);
      }
    } catch (error) {
      alert(`❌ 에러: ${error}`);
    }
  };

  // 🔥 회원 삭제 함수
  const handleDeleteUser = async (kakaoId: string, userName: string) => {
    if (!confirm(`정말로 "${userName}" (ID: ${kakaoId})의 모든 데이터를 삭제하시겠습니까?\n\n이 작업은 되돌릴 수 없습니다!`)) {
      return;
    }

    try {
      const headers = getAuthHeaders();
      if (!headers) {
        alert('❌ 인증 정보가 없습니다. 다시 로그인해주세요.');
        return;
      }
      
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-53dba95c/admin/users/${kakaoId}`,
        {
          method: 'DELETE',
          headers,
        }
      );

      const data = await response.json();

      if (data.success) {
        alert(`✅ ${userName}의 모든 데이터가 삭제되었습니다.\n\n💡 로그아웃 후 다시 로그인하면 새 계정이 생성됩니다.`);
        fetchUsers(); // 목록 새로고침
      } else {
        alert(`❌ 실패: ${data.error}`);
      }
    } catch (error) {
      alert(`❌ 에러: ${error}`);
    }
  };

  if (loading) {
    return <div className="text-center py-12">로딩 중...</div>;
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="text-2xl font-bold text-gray-900">회원 목록 ({users.length}명)</h2>
      </div>

      <div className="bg-white shadow overflow-hidden sm:rounded-md">
        <ul className="divide-y divide-gray-200">
          {users.map((user) => (
            <li key={user.kakaoId}>
              <div className="px-4 py-4 sm:px-6">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex-1">
                    <div className="flex flex-col gap-1 mb-1 sm:flex-row sm:items-center sm:gap-3">
                      <p className="text-sm font-medium text-gray-900">{user.userName}</p>
                      {user.email && (
                        <span className="break-all text-xs text-gray-500">{user.email}</span>
                      )}
                    </div>
                    <span className="break-all text-xs text-gray-400">카카오 ID: {user.kakaoId}</span>
                    <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-sm text-gray-500">
                      <span>💰 {user.points?.toLocaleString() || 0}P</span>
                      <span>🎫 당첨 {user.winningTicketsCount || 0}개</span>
                      <span>📝 거래 {user.transactionsCount || 0}건</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2 sm:flex">
                    <button
                      onClick={() => setSelectedUser(user)}
                      className="px-4 py-2 bg-black text-white text-sm rounded hover:bg-gray-800 sm:ml-4"
                    >
                      포인트 충전
                    </button>
                    <button
                      onClick={() => handleDeleteUser(user.kakaoId, user.userName)}
                      className="px-4 py-2 bg-red-600 text-white text-sm rounded hover:bg-red-700"
                    >
                      삭제
                    </button>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* 포인트 충전 모달 */}
      {selectedUser && (
        <div className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-black bg-opacity-50 p-4 sm:items-center">
          <div className="my-6 w-full max-w-md rounded-lg bg-white p-5 sm:p-6">
            <h3 className="text-lg font-bold mb-4">포인트 충전 - {selectedUser.userName}</h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">충전 금액</label>
                <input
                  type="number"
                  value={pointAmount}
                  onChange={(e) => setPointAmount(Number(e.target.value))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                />
                <div className="mt-2 grid grid-cols-2 gap-2 sm:flex">
                  {[10000, 50000, 100000, 500000].map((amount) => (
                    <button
                      key={amount}
                      onClick={() => setPointAmount(amount)}
                      className="px-3 py-1 text-sm bg-gray-100 rounded hover:bg-gray-200"
                    >
                      {(amount / 10000).toFixed(0)}만
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">설명</label>
                <input
                  type="text"
                  value={pointDescription}
                  onChange={(e) => setPointDescription(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                />
              </div>

              <div className="flex gap-2">
                <button
                  onClick={() => handleAddPoints(selectedUser.kakaoId)}
                  className="flex-1 bg-black text-white py-2 rounded hover:bg-gray-800"
                >
                  충전
                </button>
                <button
                  onClick={() => setSelectedUser(null)}
                  className="flex-1 bg-gray-200 text-gray-800 py-2 rounded hover:bg-gray-300"
                >
                  닫기
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// ============================================
// 상자 설정 탭
// ============================================
function BoxSettingsTab({ isAuthenticated }: { isAuthenticated: boolean }) {
  const [settings, setSettings] = useState<BoxSetting[]>(DEFAULT_BOX_SETTINGS);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (isAuthenticated) {
      fetchSettings();
    }
  }, [isAuthenticated]);

  const fetchSettings = async () => {
    try {
      const headers = getAuthHeaders();
      if (!headers) {
        alert('❌ 인증 정보가 없습니다. 다시 로그인해주세요.');
        return;
      }

      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-53dba95c/admin/box-settings`,
        { headers }
      );
      const data = await response.json();

      if (response.ok && data.success) {
        const mergedSettings = DEFAULT_BOX_SETTINGS.map((defaultSetting) => {
          const savedSetting = (data.settings || []).find((setting: BoxSetting) => setting.ticketType === defaultSetting.ticketType);
          return {
            ...defaultSetting,
            ...savedSetting,
            ticketType: defaultSetting.ticketType,
          };
        }).sort((first, second) => first.sortOrder - second.sortOrder);

        setSettings(mergedSettings);
      } else {
        alert(`❌ 상자 설정을 불러오지 못했습니다: ${data.error}`);
      }
    } catch (error) {
      alert(`❌ 에러: ${error}`);
    } finally {
      setLoading(false);
    }
  };

  const handleChangeSetting = (ticketType: TicketType, updates: Partial<BoxSetting>) => {
    setSettings((currentSettings) =>
      currentSettings.map((setting) =>
        setting.ticketType === ticketType
          ? {
              ...setting,
              ...updates,
            }
          : setting
      )
    );
  };

  const handleSave = async () => {
    const invalidSetting = settings.find((setting) => !setting.displayName.trim());
    if (invalidSetting) {
      alert('❌ 상자 이름은 비워둘 수 없습니다.');
      return;
    }

    const invalidImageSetting = settings.find(
      (setting) =>
        (setting.homeImageUrl.trim() && !isValidHttpUrl(setting.homeImageUrl)) ||
        (setting.detailImageUrl.trim() && !isValidHttpUrl(setting.detailImageUrl))
    );
    if (invalidImageSetting) {
      alert(`❌ ${invalidImageSetting.displayName}의 이미지 URL은 http 또는 https 링크여야 합니다.`);
      return;
    }

    try {
      setSaving(true);
      const headers = getAuthHeaders();
      if (!headers) {
        alert('❌ 인증 정보가 없습니다. 다시 로그인해주세요.');
        return;
      }

      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-53dba95c/admin/box-settings`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            ...headers,
          },
          body: JSON.stringify({ settings }),
        }
      );
      const data = await response.json();

      if (response.ok && data.success) {
        alert('✅ 상자 설정이 저장되었습니다. 프론트 화면에는 새로고침 후 반영됩니다.');
        setSettings(data.settings || settings);
      } else {
        alert(`❌ 저장 실패: ${data.error}`);
      }
    } catch (error) {
      alert(`❌ 에러: ${error}`);
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return <div className="text-center py-12">로딩 중...</div>;
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">상자 설정</h2>
          <p className="mt-2 text-sm text-gray-600">
            프론트에 표시되는 상자 이름과 기본 이미지를 관리합니다. 코드 키는 데이터 연결용이라 변경할 수 없습니다.
          </p>
        </div>
        <button
          onClick={handleSave}
          disabled={saving}
          className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800 disabled:opacity-50"
        >
          {saving ? '저장 중...' : '저장'}
        </button>
      </div>

      <div className="overflow-hidden rounded-lg bg-white shadow">
        <div className="hidden grid-cols-[130px_180px_1fr_1fr_90px_90px] gap-3 border-b bg-gray-50 px-4 py-3 text-sm font-semibold text-gray-700 lg:grid">
          <div>코드 키</div>
          <div>프론트 표시 이름</div>
          <div>홈 상자 이미지 URL</div>
          <div>상세 이미지 URL</div>
          <div>노출</div>
          <div>순서</div>
        </div>
        {settings.map((setting) => (
          <div key={setting.ticketType} className="grid gap-3 border-b px-4 py-4 last:border-b-0 lg:grid-cols-[130px_180px_1fr_1fr_90px_90px] lg:py-3">
            <div className="flex items-center justify-between gap-3 lg:block">
              <span className="text-xs font-semibold text-gray-500 lg:hidden">코드 키</span>
              <span className="text-sm font-mono text-gray-700">{setting.ticketType}</span>
            </div>
            <label className="block lg:flex lg:items-center">
              <span className="mb-1 block text-xs font-semibold text-gray-500 lg:hidden">프론트 표시 이름</span>
              <input
                type="text"
                value={setting.displayName}
                onChange={(e) => handleChangeSetting(setting.ticketType, { displayName: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            </label>
            <label className="block lg:flex lg:items-center lg:gap-2">
              <span className="mb-1 block text-xs font-semibold text-gray-500 lg:hidden">홈 상자 이미지 URL</span>
              <div className="flex items-center gap-2">
              <input
                type="url"
                value={setting.homeImageUrl}
                onChange={(e) => handleChangeSetting(setting.ticketType, { homeImageUrl: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                placeholder="https://..."
              />
              <AdminImage src={setting.homeImageUrl} alt={`${setting.displayName} 홈 이미지`} className="h-10 w-10 rounded object-cover" />
            </div>
            </label>
            <label className="block lg:flex lg:items-center lg:gap-2">
              <span className="mb-1 block text-xs font-semibold text-gray-500 lg:hidden">상세 이미지 URL</span>
              <div className="flex items-center gap-2">
              <input
                type="url"
                value={setting.detailImageUrl}
                onChange={(e) => handleChangeSetting(setting.ticketType, { detailImageUrl: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                placeholder="https://..."
              />
              <AdminImage src={setting.detailImageUrl} alt={`${setting.displayName} 상세 이미지`} className="h-10 w-10 rounded object-cover" />
            </div>
            </label>
            <div className="grid grid-cols-2 gap-3 lg:contents">
            <label className="flex items-center gap-2 text-sm text-gray-700">
              <input
                type="checkbox"
                checked={setting.isActive}
                onChange={(e) => handleChangeSetting(setting.ticketType, { isActive: e.target.checked })}
              />
              사용
            </label>
            <label className="block">
              <span className="mb-1 block text-xs font-semibold text-gray-500 lg:hidden">순서</span>
              <input
                type="number"
                value={setting.sortOrder}
                onChange={(e) => handleChangeSetting(setting.ticketType, { sortOrder: Number(e.target.value) })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                min="1"
              />
            </label>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ============================================
// 리소스 설정 탭
// ============================================
function SiteResourcesTab({ isAuthenticated }: { isAuthenticated: boolean }) {
  const [resources, setResources] = useState<SiteResourceSettings>(DEFAULT_SITE_RESOURCES);
  const [fontText, setFontText] = useState(DEFAULT_SITE_RESOURCES.fontCssUrls.join('\n'));
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (isAuthenticated) {
      fetchResources();
    }
  }, [isAuthenticated]);

  const fetchResources = async () => {
    try {
      const headers = getAuthHeaders();
      if (!headers) {
        alert('❌ 인증 정보가 없습니다. 다시 로그인해주세요.');
        return;
      }

      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-53dba95c/admin/site-resources`,
        { headers }
      );
      const data = await response.json();

      if (response.ok && data.success) {
        const mergedResources = mergeSiteResources(data.resources || {});
        setResources(mergedResources);
        setFontText(mergedResources.fontCssUrls.join('\n'));
      } else {
        alert(`❌ 리소스 설정을 불러오지 못했습니다: ${data.error}`);
      }
    } catch (error) {
      alert(`❌ 에러: ${error}`);
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async () => {
    const fontCssUrls = fontText
      .split('\n')
      .map((url) => url.trim())
      .filter(Boolean);

    if (!resources.drawAnimationUrl.trim() || !isValidHttpUrl(resources.drawAnimationUrl)) {
      alert('❌ 뽑기 영상 URL은 http 또는 https 링크여야 합니다.');
      return;
    }

    const invalidFontUrl = fontCssUrls.find((url) => !isValidHttpUrl(url));
    if (invalidFontUrl) {
      alert(`❌ 폰트 CSS URL이 올바르지 않습니다: ${invalidFontUrl}`);
      return;
    }

    try {
      setSaving(true);
      const headers = getAuthHeaders();
      if (!headers) {
        alert('❌ 인증 정보가 없습니다. 다시 로그인해주세요.');
        return;
      }

      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-53dba95c/admin/site-resources`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            ...headers,
          },
          body: JSON.stringify({
            resources: {
              drawAnimationUrl: resources.drawAnimationUrl.trim(),
              fontCssUrls,
            },
          }),
        }
      );
      const data = await response.json();

      if (response.ok && data.success) {
        const mergedResources = mergeSiteResources(data.resources || {});
        setResources(mergedResources);
        setFontText(mergedResources.fontCssUrls.join('\n'));
        alert('✅ 리소스 설정이 저장되었습니다. 프론트 화면에는 새로고침 후 반영됩니다.');
      } else {
        alert(`❌ 저장 실패: ${data.error}`);
      }
    } catch (error) {
      alert(`❌ 에러: ${error}`);
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return <div className="text-center py-12">로딩 중...</div>;
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">리소스 설정</h2>
          <p className="mt-2 text-sm text-gray-600">
            전체 사이트의 폰트 CSS 링크와 뽑기 영상 링크를 관리합니다.
          </p>
        </div>
        <button
          onClick={handleSave}
          disabled={saving}
          className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800 disabled:opacity-50"
        >
          {saving ? '저장 중...' : '저장'}
        </button>
      </div>

      <div className="rounded-lg bg-white p-4 shadow space-y-6 sm:p-6">
        <div>
          <label className="mb-2 block text-sm font-semibold text-gray-700">뽑기 영상 URL</label>
          <input
            type="url"
            value={resources.drawAnimationUrl}
            onChange={(e) => setResources((current) => ({ ...current, drawAnimationUrl: e.target.value }))}
            className="w-full rounded-md border border-gray-300 px-3 py-2"
            placeholder="https://...mp4"
          />
          <video
            className="mt-4 h-[200px] w-full max-w-[420px] rounded bg-black object-cover sm:h-[240px]"
            controls
            muted
            src={resources.drawAnimationUrl}
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold text-gray-700">폰트 CSS URL</label>
          <textarea
            value={fontText}
            onChange={(e) => setFontText(e.target.value)}
            className="h-[160px] w-full rounded-md border border-gray-300 px-3 py-2 font-mono text-sm"
            placeholder="한 줄에 하나씩 입력"
          />
          <p className="mt-2 text-xs text-gray-500">
            Google Fonts, CDN CSS 링크처럼 브라우저에서 바로 불러올 수 있는 CSS URL을 한 줄에 하나씩 입력하세요.
          </p>
        </div>
      </div>
    </div>
  );
}

// ============================================
// 상품 관리 탭
// ============================================
function ProductsTab({
  isAuthenticated,
  boxSettings,
  displayNames,
}: {
  isAuthenticated: boolean;
  boxSettings: BoxSetting[];
  displayNames: Record<TicketType, string>;
}) {
  const [selectedTicketType, setSelectedTicketType] = useState<TicketType>(boxSettings[0]?.ticketType || 'legendary');
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [showAddModal, setShowAddModal] = useState(false);
  const [editingProduct, setEditingProduct] = useState<any>(null);
  const [uploading, setUploading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(50);

  useEffect(() => {
    if (isAuthenticated) {
      fetchProducts();
    }
  }, [isAuthenticated, selectedTicketType]);

  useEffect(() => {
    if (!boxSettings.some((setting) => setting.ticketType === selectedTicketType)) {
      setSelectedTicketType(boxSettings[0]?.ticketType || 'legendary');
    }
  }, [boxSettings, selectedTicketType]);

  useEffect(() => {
    setCurrentPage(1);
    setSearchTerm('');
  }, [selectedTicketType]);

  const filteredProducts = useMemo(() => {
    const normalizedSearch = searchTerm.trim().toLowerCase();
    if (!normalizedSearch) return products;

    return products.filter((product) => {
      const values = [product.name, product.brand, product.id, product.points, product.probability, product.stock];
      return values.some((value) => String(value || '').toLowerCase().includes(normalizedSearch));
    });
  }, [products, searchTerm]);

  const totalPages = Math.max(1, Math.ceil(filteredProducts.length / pageSize));
  const safeCurrentPage = Math.min(currentPage, totalPages);
  const paginatedProducts = useMemo(() => {
    const startIndex = (safeCurrentPage - 1) * pageSize;
    return filteredProducts.slice(startIndex, startIndex + pageSize);
  }, [filteredProducts, pageSize, safeCurrentPage]);

  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(totalPages);
    }
  }, [currentPage, totalPages]);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const headers = getAuthHeaders();
      if (!headers) {
        alert('❌ 인증 정보가 없습니다. 다시 로그인해주세요.');
        setLoading(false);
        return;
      }
      
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-53dba95c/admin/products/${selectedTicketType}`,
        {
          headers,
        }
      );
      const data = await response.json();
      
      if (!response.ok) {
        console.error('Admin API error:', data);
        alert(`❌ 관리자 권한이 없습니다: ${data.error || response.statusText}`);
        return;
      }
      
      setProducts((data.products || []).map((product: any) => ({
        ...product,
        ticketType: canonicalizeBoxTicketType(product.ticketType),
      })));
    } catch (error) {
      console.error('Error fetching products:', error);
      alert(`❌ 에러: ${error}`);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteProduct = async (productId: string) => {
    if (!confirm('정말 삭제하시겠습니까?')) return;

    try {
      const headers = getAuthHeaders();
      if (!headers) {
        alert('❌ 인증 정보가 없습니다. 다시 로그인해주세요.');
        return;
      }
      
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-53dba95c/admin/products/${selectedTicketType}/${productId}`,
        {
          method: 'DELETE',
          headers,
        }
      );

      if (response.ok) {
        alert('✅ 삭제되었습니다.');
        fetchProducts();
      }
    } catch (error) {
      alert(`❌ 에러: ${error}`);
    }
  };

  // 📥 엑셀 템플릿 다운로드
  const handleDownloadTemplate = () => {
    const templateData = [
      {
        '박스타입': 'legendary',
        '상품명': 'iPhone 15 Pro Max',
        '브랜드': 'Apple',
        '포인트': 50000,
        '가중치': 5,
        '재고': 10,
        '이미지URL': 'https://images.unsplash.com/photo-1632633728024-e1fd4bef561a',
      },
      {
        '박스타입': 'mystery',
        '상품명': 'AirPods Pro',
        '브랜드': 'Apple',
        '포인트': 15000,
        '가중치': 10,
        '재고': 50,
        '이미지URL': 'https://images.unsplash.com/photo-1606841837239-c5a1a4a07af7',
      },
      {
        '박스타입': 'starlight',
        '상품명': 'CU 모바일 상품권 3만원',
        '브랜드': 'CU',
        '포인트': 10000,
        '가중치': 15,
        '재고': 100,
        '이미지URL': 'https://images.unsplash.com/photo-1542838132-92c53300491e',
      },
      {
        '박스타입': 'purdal',
        '상품명': '퍼달이 랜덤 굿즈',
        '브랜드': 'Centbox',
        '포인트': 9900,
        '가중치': 10,
        '재고': 100,
        '이미지URL': 'https://images.unsplash.com/photo-1513201099705-a9746e1e201f',
      },
    ];

    const ws = XLSX.utils.json_to_sheet(templateData);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, '상품목록');
    
    // 열 너비 설정
    ws['!cols'] = [
      { wch: 12 }, // 박스타입
      { wch: 25 }, // 상품명
      { wch: 15 }, // 브랜드
      { wch: 10 }, // 포인트
      { wch: 10 }, // 가중치
      { wch: 8 },  // 재고
      { wch: 60 }, // 이미지URL
    ];

    XLSX.writeFile(wb, '상품등록_템플릿.xlsx');
  };

  // 📤 엑셀 파일 업로드 및 일괄 등록
  const handleExcelUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      setUploading(true);
      
      const data = await file.arrayBuffer();
      const workbook = XLSX.read(data);
      const worksheet = workbook.Sheets[workbook.SheetNames[0]];
      const jsonData = XLSX.utils.sheet_to_json(worksheet);

      if (jsonData.length === 0) {
        alert('❌ 엑셀 파일에 데이터가 없습니다.');
        return;
      }

      // 데이터 검증 및 변환
      const productsToAdd: any[] = [];
      const errors: string[] = [];

      jsonData.forEach((row: any, index: number) => {
        const rowNum = index + 2; // 엑셀 행 번호 (헤더 포함)
        
        // 필수 필드 확인
        if (!row['박스타입']) {
          errors.push(`${rowNum}행: 박스타입이 없습니다.`);
          return;
        }
        if (!row['상품명']) {
          errors.push(`${rowNum}행: 상품명이 없습니다.`);
          return;
        }
        if (!row['브랜드']) {
          errors.push(`${rowNum}행: 브랜드가 없습니다.`);
          return;
        }
        if (!row['이미지URL']) {
          errors.push(`${rowNum}행: 이미지URL이 없습니다.`);
          return;
        }
        if (!isValidHttpUrl(String(row['이미지URL']))) {
          errors.push(`${rowNum}행: 이미지URL은 http 또는 https URL이어야 합니다.`);
          return;
        }

        // 티켓 타입 검증
        const ticketType = canonicalizeBoxTicketType(String(row['박스타입']).toLowerCase());
        const validTicketTypes = boxSettings.map((setting) => setting.ticketType);
        if (!validTicketTypes.includes(ticketType)) {
          errors.push(`${rowNum}행: 잘못된 박스타입 (${row['박스타입']}). 가능한 값: ${validTicketTypes.join(', ')}`);
          return;
        }

        const points = Number(row['포인트']) || 1000;
        const probability = Number(row['가중치']) || 5;
        const stock = Number(row['재고']) || 999;

        if (points <= 0) {
          errors.push(`${rowNum}행: 포인트는 1 이상이어야 합니다.`);
          return;
        }
        if (probability < 0) {
          errors.push(`${rowNum}행: 가중치는 0 이상이어야 합니다.`);
          return;
        }
        if (stock < 0) {
          errors.push(`${rowNum}행: 재고는 0 이상이어야 합니다.`);
          return;
        }

        productsToAdd.push({
          ticketType,
          name: String(row['상품명']),
          brand: String(row['브랜드']),
          points,
          probability,
          stock,
          imageUrl: String(row['이미지URL']),
        });
      });

      if (errors.length > 0) {
        alert(`❌ 데이터 검증 실패:\n\n${errors.join('\n')}`);
        setUploading(false);
        return;
      }

      if (productsToAdd.length === 0) {
        alert('❌ 등록할 상품이 없습니다.');
        setUploading(false);
        return;
      }

      // 일괄 등록 확인
      if (!confirm(`총 ${productsToAdd.length}개의 상품을 등록하시겠습니까?`)) {
        setUploading(false);
        return;
      }

      // 백엔드 API 호출 (각 상품별로 등록)
      let successCount = 0;
      let failCount = 0;
      const failedProducts: string[] = [];

      for (const product of productsToAdd) {
        try {
          const headers = getAuthHeaders();
          if (!headers) {
            alert('❌ 인증 정보가 없습니다. 다시 로그인해주세요.');
            break;
          }
          
          const response = await fetch(
            `https://${projectId}.supabase.co/functions/v1/make-server-53dba95c/admin/products/${product.ticketType}`,
            {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                ...headers,
              },
              body: JSON.stringify({
                name: product.name,
                brand: product.brand,
                imageUrl: product.imageUrl,
                points: product.points,
                probability: product.probability,
                stock: product.stock,
              }),
            }
          );

          const data = await response.json();

          if (data.success) {
            successCount++;
          } else {
            failCount++;
            failedProducts.push(`${product.name} (${data.error})`);
          }
        } catch (error) {
          failCount++;
          failedProducts.push(`${product.name} (네트워크 에러)`);
        }
      }

      // 결과 알림
      let message = `✅ 등록 완료!\n\n성공: ${successCount}개\n실패: ${failCount}개`;
      if (failedProducts.length > 0) {
        message += `\n\n실패한 상품:\n${failedProducts.join('\n')}`;
      }
      alert(message);

      // 목록 새로고침
      fetchProducts();

      // 파일 입력 초기화
      e.target.value = '';
    } catch (error) {
      alert(`❌ 엑셀 파일 처리 중 오류: ${error}`);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="text-2xl font-bold text-gray-900">상품 관리</h2>
        <div className="grid grid-cols-1 gap-2 sm:flex">
          {/* 엑셀 템플릿 다운로드 버튼 */}
          <button
            onClick={handleDownloadTemplate}
            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 text-sm flex items-center gap-2"
          >
            📥 템플릿 다운로드
          </button>
          
          {/* 엑셀 업로드 버튼 */}
          <label className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm cursor-pointer flex items-center gap-2">
            {uploading ? '업로드 중...' : '📤 엑셀 일괄등록'}
            <input
              type="file"
              accept=".xlsx,.xls"
              onChange={handleExcelUpload}
              className="hidden"
              disabled={uploading}
            />
          </label>

          {/* 개별 상품 추가 버튼 */}
          <button
            onClick={() => setShowAddModal(true)}
            className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800"
          >
            + 상품 추가
          </button>
        </div>
      </div>

      {/* 엑셀 업로드 안내 */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <h3 className="text-sm font-medium text-blue-900 mb-2">💡 엑셀 일괄 등록 사용 방법</h3>
        <ol className="text-xs text-blue-700 space-y-1 list-decimal list-inside">
          <li><strong>템플릿 다운로드</strong> 버튼을 클릭하여 엑셀 템플릿을 다운로드합니다.</li>
          <li>템플릿에 상품 정보를 입력합니다. (박스타입, 상품명, 브랜드, 포인트, 가중치, 재고, 이미지URL)</li>
          <li><strong>엑셀 일괄등록</strong> 버튼을 클릭하여 작성한 파일을 업로드합니다.</li>
          <li>검증 후 일괄 등록됩니다.</li>
        </ol>
        <p className="text-xs text-blue-600 mt-2">
          ⚠️ 박스타입: {boxSettings.map((setting) => setting.ticketType).join(', ')} 중 하나여야 합니다. 기존 diamond, gold, platinum, ruby 값도 자동 변환됩니다.
        </p>
      </div>

      {/* 박스 타입 선택 */}
      <div className="flex gap-2 flex-wrap">
        {boxSettings.map((setting) => (
          <button
            key={setting.ticketType}
            onClick={() => setSelectedTicketType(setting.ticketType)}
            className={`px-4 py-2 rounded ${
              selectedTicketType === setting.ticketType
                ? 'bg-black text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {displayNames[setting.ticketType] || setting.displayName}
          </button>
        ))}
      </div>

      <div className="bg-white shadow rounded-lg p-4">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 mb-1">상품 검색</label>
            <input
              type="search"
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentPage(1);
              }}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              placeholder="상품명, 브랜드, ID, 포인트로 검색"
            />
          </div>
          <div className="w-full md:w-40">
            <label className="block text-sm font-medium text-gray-700 mb-1">페이지당 표시</label>
            <select
              value={pageSize}
              onChange={(e) => {
                setPageSize(Number(e.target.value));
                setCurrentPage(1);
              }}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            >
              <option value={25}>25개</option>
              <option value={50}>50개</option>
              <option value={100}>100개</option>
              <option value={200}>200개</option>
            </select>
          </div>
        </div>
        <div className="mt-3 text-sm text-gray-600">
          전체 {products.length.toLocaleString()}개 중 {filteredProducts.length.toLocaleString()}개 표시 대상
        </div>
      </div>

      {/* 상품 목록 */}
      {loading ? (
        <div className="text-center py-12">로딩 중...</div>
      ) : products.length === 0 ? (
        <div className="bg-white shadow rounded-lg p-12 text-center">
          <div className="text-6xl mb-4">📦</div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">등록된 상품이 없습니다</h3>
          <p className="text-sm text-gray-500 mb-6">
            {displayNames[selectedTicketType] || TICKET_TYPE_NAMES[selectedTicketType]}에 당첨 가능한 상품을 추가해주세요.
          </p>
          <button
            onClick={() => setShowAddModal(true)}
            className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 font-medium"
          >
            첫 상품 등록하기
          </button>
        </div>
      ) : filteredProducts.length === 0 ? (
        <div className="bg-white shadow rounded-lg p-12 text-center">
          <h3 className="text-lg font-medium text-gray-900 mb-2">검색 결과가 없습니다</h3>
          <p className="text-sm text-gray-500 mb-6">검색어를 바꾸거나 지워주세요.</p>
          <button
            onClick={() => setSearchTerm('')}
            className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 font-medium"
          >
            검색 초기화
          </button>
        </div>
      ) : (
        <>
          <div className="bg-white shadow overflow-hidden sm:rounded-md">
            <ul className="divide-y divide-gray-200">
            {paginatedProducts.map((product) => (
              <li key={product.id}>
                <div className="px-4 py-4 sm:px-6">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex items-start gap-4">
                      <AdminImage
                        src={product.imageUrl}
                        alt={product.name}
                        className="h-16 w-16 shrink-0 rounded object-cover"
                      />
                      <div className="min-w-0">
                        <p className="break-words text-sm font-medium text-gray-900">{product.name}</p>
                        <p className="break-words text-sm text-gray-500">{product.brand}</p>
                        <div className="mt-1 flex flex-wrap gap-x-3 gap-y-1 text-xs text-gray-500">
                          <span>💰 {product.points.toLocaleString()}P</span>
                          <span>⚖️ 가중치 {product.probability}</span>
                          <span>📦 재고 {product.stock}</span>
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-2 sm:flex">
                      <button
                        onClick={() => setEditingProduct(product)}
                        className="px-3 py-1 text-sm bg-gray-100 rounded hover:bg-gray-200"
                      >
                        수정
                      </button>
                      <button
                        onClick={() => handleDeleteProduct(product.id)}
                        className="px-3 py-1 text-sm bg-red-100 text-red-700 rounded hover:bg-red-200"
                      >
                        삭제
                      </button>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-gray-600">
            {((safeCurrentPage - 1) * pageSize + 1).toLocaleString()}-
            {Math.min(safeCurrentPage * pageSize, filteredProducts.length).toLocaleString()} /
            {filteredProducts.length.toLocaleString()}개
          </p>
          <div className="grid grid-cols-2 gap-2 sm:flex sm:items-center">
            <button
              onClick={() => setCurrentPage(1)}
              disabled={safeCurrentPage === 1}
              className="px-3 py-2 bg-white border rounded disabled:opacity-40"
            >
              처음
            </button>
            <button
              onClick={() => setCurrentPage((page) => Math.max(1, page - 1))}
              disabled={safeCurrentPage === 1}
              className="px-3 py-2 bg-white border rounded disabled:opacity-40"
            >
              이전
            </button>
            <span className="px-3 py-2 text-sm text-gray-700">
              {safeCurrentPage} / {totalPages}
            </span>
            <button
              onClick={() => setCurrentPage((page) => Math.min(totalPages, page + 1))}
              disabled={safeCurrentPage === totalPages}
              className="px-3 py-2 bg-white border rounded disabled:opacity-40"
            >
              다음
            </button>
            <button
              onClick={() => setCurrentPage(totalPages)}
              disabled={safeCurrentPage === totalPages}
              className="px-3 py-2 bg-white border rounded disabled:opacity-40"
            >
              끝
            </button>
          </div>
        </div>
        </>
      )}

      {/* 추가/수정 모달 */}
      {(showAddModal || editingProduct) && (
        <ProductModal
          ticketType={selectedTicketType}
          displayNames={displayNames}
          product={editingProduct}
          onClose={() => {
            setShowAddModal(false);
            setEditingProduct(null);
          }}
          onSuccess={fetchProducts}
        />
      )}
    </div>
  );
}

// 상품 추가/수정 모달
function ProductModal({
  ticketType,
  product,
  displayNames,
  onClose,
  onSuccess,
}: {
  ticketType: TicketType;
  product?: any;
  displayNames: Record<TicketType, string>;
  onClose: () => void;
  onSuccess: () => void;
}) {
  const [formData, setFormData] = useState({
    name: product?.name || '',
    brand: product?.brand || '',
    imageUrl: product?.imageUrl || '',
    points: product?.points || 1000,
    probability: product?.probability || 5,
    stock: product?.stock || 999,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const trimmedData = {
      ...formData,
      name: formData.name.trim(),
      brand: formData.brand.trim(),
      imageUrl: formData.imageUrl.trim(),
    };

    if (!trimmedData.name || !trimmedData.brand) {
      alert('❌ 상품명과 브랜드를 입력해주세요.');
      return;
    }

    if (!isValidHttpUrl(trimmedData.imageUrl)) {
      alert('❌ 이미지 URL은 http 또는 https로 시작하는 올바른 URL이어야 합니다.');
      return;
    }

    if (trimmedData.points <= 0) {
      alert('❌ 포인트는 1 이상이어야 합니다.');
      return;
    }

    if (trimmedData.probability < 0) {
      alert('❌ 가중치는 0 이상이어야 합니다.');
      return;
    }

    if (trimmedData.stock < 0) {
      alert('❌ 재고는 0 이상이어야 합니다.');
      return;
    }

    try {
      const headers = getAuthHeaders();
      if (!headers) {
        alert('❌ 인증 정보가 없습니다. 다시 로그인해주세요.');
        return;
      }

      const url = product
        ? `https://${projectId}.supabase.co/functions/v1/make-server-53dba95c/admin/products/${ticketType}/${product.id}`
        : `https://${projectId}.supabase.co/functions/v1/make-server-53dba95c/admin/products/${ticketType}`;

      const response = await fetch(url, {
        method: product ? 'PUT' : 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...headers,
        },
        body: JSON.stringify(trimmedData),
      });

      const data = await response.json();

      if (data.success) {
        alert(`✅ ${product ? '수정' : '추가'}되었습니다.`);
        onSuccess();
        onClose();
      } else {
        alert(`❌ 실패: ${data.error}`);
      }
    } catch (error) {
      alert(`❌ 에러: ${error}`);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-black bg-opacity-50 p-4 sm:items-center">
      <div className="my-6 w-full max-w-md rounded-lg bg-white p-5 sm:p-6">
        <h3 className="text-lg font-bold mb-4">
          {product ? '상품 수정' : '상품 추가'} - {displayNames[ticketType] || TICKET_TYPE_NAMES[ticketType]}
        </h3>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">상품명</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">브랜드</label>
            <input
              type="text"
              value={formData.brand}
              onChange={(e) => setFormData({ ...formData, brand: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">이미지 URL</label>
            <input
              type="url"
              value={formData.imageUrl}
              onChange={(e) => setFormData({ ...formData, imageUrl: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              placeholder="https://images.unsplash.com/..."
              required
            />
            {formData.imageUrl && (
              <div className="mt-2 flex items-center gap-3 rounded-md bg-gray-50 p-2">
                <AdminImage
                  src={formData.imageUrl}
                  alt="상품 이미지 미리보기"
                  className="w-16 h-16 object-cover rounded"
                />
                <p className="text-xs text-gray-500">
                  저장 전 이미지가 정상 표시되는지 확인하세요.
                </p>
              </div>
            )}
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-2">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">포인트</label>
              <input
                type="number"
                value={formData.points}
                onChange={(e) => setFormData({ ...formData, points: Number(e.target.value) })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                min="1"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                가중치 (상대적 당첨 확률)
              </label>
              <input
                type="number"
                value={formData.probability}
                onChange={(e) => setFormData({ ...formData, probability: Number(e.target.value) })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                min="0"
                required
              />
              <p className="text-xs text-gray-500 mt-1">
                💡 전체 합계가 100일 필요 없습니다. 예: 3, 2, 5 입력 시 → 30%, 20%, 50% 확률
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">재고</label>
              <input
                type="number"
                value={formData.stock}
                onChange={(e) => setFormData({ ...formData, stock: Number(e.target.value) })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                min="0"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2 pt-4">
            <button
              type="submit"
              className="flex-1 bg-black text-white py-2 rounded hover:bg-gray-800"
            >
              {product ? '수정' : '추가'}
            </button>
            <button
              type="button"
              onClick={onClose}
              className="flex-1 bg-gray-200 text-gray-800 py-2 rounded hover:bg-gray-300"
            >
              닫기
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

// ============================================
// 럭키드로우 탭
// ============================================
function LuckyDrawsTab({ isAuthenticated }: { isAuthenticated: boolean }) {
  const [luckyDraws, setLuckyDraws] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [showAddModal, setShowAddModal] = useState(false);
  const [editingDraw, setEditingDraw] = useState<any>(null);
  const [participantsDraw, setParticipantsDraw] = useState<any>(null);
  const [participants, setParticipants] = useState<any[]>([]);
  const [participantsLoading, setParticipantsLoading] = useState(false);

  useEffect(() => {
    if (isAuthenticated) {
      fetchLuckyDraws();
    }
  }, [isAuthenticated]);

  const fetchLuckyDraws = async () => {
    try {
      const headers = getAuthHeaders();
      if (!headers) {
        alert('❌ 인증 정보가 없습니다. 다시 로그인해주세요.');
        setLoading(false);
        return;
      }
      
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-53dba95c/admin/lucky-draws`,
        {
          headers,
        }
      );
      const data = await response.json();
      
      if (!response.ok) {
        console.error('Admin API error:', data);
        alert(`❌ 관리자 권한이 없습니다: ${data.error || response.statusText}`);
        return;
      }
      
      setLuckyDraws(data.luckyDraws || []);
    } catch (error) {
      console.error('Error fetching lucky draws:', error);
      alert(`❌ 에러: ${error}`);
    } finally {
      setLoading(false);
    }
  };

  const handleDrawWinner = async (luckyDrawId: string) => {
    if (!confirm('당첨자를 추첨하시겠습니까?')) return;

    try {
      const headers = getAuthHeaders();
      if (!headers) {
        alert('❌ 인증 정보가 없습니다. 다시 로그인해주세요.');
        return;
      }
      
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-53dba95c/admin/lucky-draws/${luckyDrawId}/draw-winner`,
        {
          method: 'POST',
          headers,
        }
      );

      const data = await response.json();

      if (data.success) {
        alert(`🎉 당첨자: ${data.winner.userName} (총 ${data.totalParticipants}명 참여)`);
        fetchLuckyDraws();
      } else {
        alert(`❌ 실패: ${data.error}`);
      }
    } catch (error) {
      alert(`❌ 에러: ${error}`);
    }
  };

  const handleUpdateDrawStatus = async (draw: any, status: string) => {
    const label = status === 'ended' ? '종료' : '활성화';
    if (!confirm(`"${draw.name}" 럭키드로우를 ${label}하시겠습니까?`)) return;

    try {
      const headers = getAuthHeaders();
      if (!headers) {
        alert('❌ 인증 정보가 없습니다. 다시 로그인해주세요.');
        return;
      }

      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-53dba95c/admin/lucky-draws/${draw.id}`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            ...headers,
          },
          body: JSON.stringify({ ...draw, status }),
        }
      );
      const data = await response.json();

      if (data.success) {
        alert(`✅ 럭키드로우가 ${label}되었습니다.`);
        fetchLuckyDraws();
      } else {
        alert(`❌ 실패: ${data.error}`);
      }
    } catch (error) {
      alert(`❌ 에러: ${error}`);
    }
  };

  const handleDeleteDraw = async (draw: any) => {
    if (!confirm(`"${draw.name}" 럭키드로우를 삭제하시겠습니까?\n\n참여 내역도 함께 정리됩니다.`)) return;

    try {
      const headers = getAuthHeaders();
      if (!headers) {
        alert('❌ 인증 정보가 없습니다. 다시 로그인해주세요.');
        return;
      }

      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-53dba95c/admin/lucky-draws/${draw.id}`,
        {
          method: 'DELETE',
          headers,
        }
      );
      const data = await response.json();

      if (data.success) {
        alert('✅ 럭키드로우가 삭제되었습니다.');
        fetchLuckyDraws();
      } else {
        alert(`❌ 실패: ${data.error}`);
      }
    } catch (error) {
      alert(`❌ 에러: ${error}`);
    }
  };

  const handleLoadParticipants = async (draw: any) => {
    setParticipantsDraw(draw);
    setParticipants([]);
    setParticipantsLoading(true);

    try {
      const headers = getAuthHeaders();
      if (!headers) {
        alert('❌ 인증 정보가 없습니다. 다시 로그인해주세요.');
        return;
      }

      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-53dba95c/admin/lucky-draws/${draw.id}/participants`,
        { headers }
      );
      const data = await response.json();

      if (response.ok && data.success) {
        setParticipants(data.participants || []);
      } else {
        alert(`❌ 참여자 조회 실패: ${data.error}`);
      }
    } catch (error) {
      alert(`❌ 에러: ${error}`);
    } finally {
      setParticipantsLoading(false);
    }
  };

  if (loading) {
    return <div className="text-center py-12">로딩 중...</div>;
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="text-2xl font-bold text-gray-900">럭키드로우 관리</h2>
        <button
          onClick={() => setShowAddModal(true)}
          className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800"
        >
          + 럭키드로우 추가
        </button>
      </div>

      {luckyDraws.length === 0 ? (
        <div className="bg-white shadow rounded-lg p-12 text-center">
          <div className="text-6xl mb-4">🎲</div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">등록된 럭키드로우가 없습니다</h3>
          <p className="text-sm text-gray-500 mb-6">
            새로운 럭키드로우 이벤트를 추가하여 사용자들에게 응모 기회를 제공하세요.
          </p>
          <button
            onClick={() => setShowAddModal(true)}
            className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 font-medium"
          >
            첫 럭키드로우 추가하기
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {luckyDraws.map((draw) => (
            <div key={draw.id} className="bg-white shadow rounded-lg p-6">
              <div className="flex items-start gap-4 mb-4">
                <AdminImage
                  src={draw.imageUrl}
                  alt={draw.name}
                  className="h-20 w-20 shrink-0 rounded object-cover"
                />
                <div className="min-w-0 flex-1">
                  <h3 className="break-words font-bold text-gray-900">{draw.name}</h3>
                  <p className="break-words text-sm text-gray-500">{draw.brand}</p>
                  <p className="text-sm text-gray-500">참여: {draw.entryPoints.toLocaleString()}P</p>
                  <p className="text-xs text-gray-500">
                    상태: {draw.status === 'ended' ? '종료' : draw.status === 'completed' ? '추첨완료' : '진행중'}
                    {draw.endDate ? ` · 종료일 ${draw.endDate}` : ''}
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => handleLoadParticipants(draw)}
                  className="bg-gray-100 text-gray-800 py-2 rounded hover:bg-gray-200 text-sm"
                >
                  참여자 보기
                </button>
                <button
                  onClick={() => setEditingDraw(draw)}
                  className="bg-gray-100 text-gray-800 py-2 rounded hover:bg-gray-200 text-sm"
                >
                  수정
                </button>
                <button
                  onClick={() => handleDrawWinner(draw.id)}
                  disabled={draw.status === 'ended' || draw.status === 'completed'}
                  className="bg-green-600 text-white py-2 rounded hover:bg-green-700 text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  🎲 추첨하기
                </button>
                <button
                  onClick={() => handleUpdateDrawStatus(draw, draw.status === 'ended' ? 'active' : 'ended')}
                  className="bg-yellow-100 text-yellow-800 py-2 rounded hover:bg-yellow-200 text-sm"
                >
                  {draw.status === 'ended' ? '다시 활성화' : '종료'}
                </button>
                <button
                  onClick={() => handleDeleteDraw(draw)}
                  className="col-span-2 bg-red-100 text-red-700 py-2 rounded hover:bg-red-200 text-sm"
                >
                  삭제
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {showAddModal && (
        <LuckyDrawModal
          onClose={() => setShowAddModal(false)}
          onSuccess={fetchLuckyDraws}
        />
      )}

      {editingDraw && (
        <LuckyDrawModal
          luckyDraw={editingDraw}
          onClose={() => setEditingDraw(null)}
          onSuccess={fetchLuckyDraws}
        />
      )}

      {participantsDraw && (
        <div className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-black bg-opacity-50 p-4 sm:items-center">
          <div className="my-6 max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-lg bg-white p-5 sm:p-6">
            <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <h3 className="text-lg font-bold">참여자 목록 - {participantsDraw.name}</h3>
              <button
                onClick={() => setParticipantsDraw(null)}
                className="px-3 py-1 bg-gray-100 rounded hover:bg-gray-200 text-sm"
              >
                닫기
              </button>
            </div>
            {participantsLoading ? (
              <div className="text-center py-8">로딩 중...</div>
            ) : participants.length === 0 ? (
              <p className="text-sm text-gray-500">참여자가 없습니다.</p>
            ) : (
              <div className="space-y-2">
                {participants.map((participant) => (
                  <div key={`${participant.kakaoId}-${participant.enteredAt}`} className="border rounded p-3">
                    <div className="flex flex-col gap-2 sm:flex-row sm:justify-between sm:gap-3">
                      <div>
                        <p className="font-medium text-sm">{participant.userName || '이름 없음'}</p>
                        <p className="text-xs text-gray-500">카카오 ID: {participant.kakaoId}</p>
                      </div>
                      <div className="text-left sm:text-right">
                        <p className="text-xs text-gray-500">{participant.status}</p>
                        <p className="text-xs text-gray-500">
                          {participant.enteredAt ? new Date(participant.enteredAt).toLocaleString('ko-KR') : '-'}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

// 럭키드로우 추가 모달
function LuckyDrawModal({
  luckyDraw,
  onClose,
  onSuccess,
}: {
  luckyDraw?: any;
  onClose: () => void;
  onSuccess: () => void;
}) {
  const [formData, setFormData] = useState({
    name: luckyDraw?.name || '',
    brand: luckyDraw?.brand || '',
    imageUrl: luckyDraw?.imageUrl || '',
    entryPoints: luckyDraw?.entryPoints || 10000,
    endDate: luckyDraw?.endDate || '',
    maxParticipants: luckyDraw?.maxParticipants || 1000,
    status: luckyDraw?.status || 'active',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const trimmedData = {
      ...formData,
      name: formData.name.trim(),
      brand: formData.brand.trim(),
      imageUrl: formData.imageUrl.trim(),
    };

    if (!trimmedData.name || !trimmedData.brand) {
      alert('❌ 상품명과 브랜드를 입력해주세요.');
      return;
    }

    if (!isValidHttpUrl(trimmedData.imageUrl)) {
      alert('❌ 이미지 URL은 http 또는 https로 시작하는 올바른 URL이어야 합니다.');
      return;
    }

    if (trimmedData.entryPoints <= 0) {
      alert('❌ 참여 포인트는 1 이상이어야 합니다.');
      return;
    }

    if (trimmedData.maxParticipants <= 0) {
      alert('❌ 최대 참여자는 1명 이상이어야 합니다.');
      return;
    }

    try {
      const headers = getAuthHeaders();
      if (!headers) {
        alert('❌ 인증 정보가 없습니다. 다시 로그인해주세요.');
        return;
      }

      const url = luckyDraw
        ? `https://${projectId}.supabase.co/functions/v1/make-server-53dba95c/admin/lucky-draws/${luckyDraw.id}`
        : `https://${projectId}.supabase.co/functions/v1/make-server-53dba95c/admin/lucky-draws`;
      
      const response = await fetch(url, {
        method: luckyDraw ? 'PUT' : 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...headers,
        },
        body: JSON.stringify(trimmedData),
      });

      const data = await response.json();

      if (data.success) {
        alert(`✅ 럭키드로우가 ${luckyDraw ? '수정' : '추가'}되었습니다.`);
        onSuccess();
        onClose();
      } else {
        alert(`❌ 실패: ${data.error}`);
      }
    } catch (error) {
      alert(`❌ 에러: ${error}`);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-black bg-opacity-50 p-4 sm:items-center">
      <div className="my-6 w-full max-w-md rounded-lg bg-white p-5 sm:p-6">
        <h3 className="text-lg font-bold mb-4">럭키드로우 {luckyDraw ? '수정' : '추가'}</h3>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">상품명</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">브랜드</label>
            <input
              type="text"
              value={formData.brand}
              onChange={(e) => setFormData({ ...formData, brand: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">이미지 URL</label>
            <input
              type="url"
              value={formData.imageUrl}
              onChange={(e) => setFormData({ ...formData, imageUrl: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              required
            />
            {formData.imageUrl && (
              <div className="mt-2 flex items-center gap-3 rounded-md bg-gray-50 p-2">
                <AdminImage
                  src={formData.imageUrl}
                  alt="럭키드로우 이미지 미리보기"
                  className="w-16 h-16 object-cover rounded"
                />
                <p className="text-xs text-gray-500">이미지 미리보기</p>
              </div>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">참여 포인트</label>
            <input
              type="number"
              value={formData.entryPoints}
              onChange={(e) => setFormData({ ...formData, entryPoints: Number(e.target.value) })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              min="1"
              required
            />
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-2">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">종료일</label>
              <input
                type="date"
                value={formData.endDate}
                onChange={(e) => setFormData({ ...formData, endDate: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">최대 참여자</label>
              <input
                type="number"
                value={formData.maxParticipants}
                onChange={(e) => setFormData({ ...formData, maxParticipants: Number(e.target.value) })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                min="1"
                required
              />
            </div>
          </div>

          {luckyDraw && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">상태</label>
              <select
                value={formData.status}
                onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              >
                <option value="active">진행중</option>
                <option value="ended">종료</option>
                <option value="completed">추첨완료</option>
              </select>
            </div>
          )}

          <div className="grid grid-cols-2 gap-2 pt-4">
            <button
              type="submit"
              className="flex-1 bg-black text-white py-2 rounded hover:bg-gray-800"
            >
              {luckyDraw ? '수정' : '추가'}
            </button>
            <button
              type="button"
              onClick={onClose}
              className="flex-1 bg-gray-200 text-gray-800 py-2 rounded hover:bg-gray-300"
            >
              닫기
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
