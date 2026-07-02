select table_name
from information_schema.tables
where table_schema = 'public'
  and table_name in (
    'charge_requests',
    'payment_events',
    'point_ledger',
    'order_mappings',
    'reconciliation_jobs'
  )
order by table_name;

select
  to_regclass('public.charge_requests') as charge_requests,
  to_regclass('public.payment_events') as payment_events,
  to_regclass('public.point_ledger') as point_ledger,
  to_regclass('public.order_mappings') as order_mappings,
  to_regclass('public.reconciliation_jobs') as reconciliation_jobs,
  to_regclass('public.user_point_balances') as user_point_balances;
