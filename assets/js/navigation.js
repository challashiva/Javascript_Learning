const DAY_PLAN=[
  {num:1,file:"day1_javascript_fundamentals.html"},
  {num:2,file:"day2_javascript_arrays_objects.html"},
  {num:3,file:"day3_functions_async_js.html"},
  {num:4,file:"day4_dom_events_classes.html"},
  {num:5,file:"day5_dom_events_classes.html"},
  {num:6,file:"day6_es6_modules_iterators_generators.html"},
  {num:7,file:"day7_week1_review_project.html"},
  {num:8,file:"day8_react_essentials.html"},
  {num:9,file:"day9_react_state_events.html"},
  {num:10,file:"day10_react_hooks.html"},
  {num:11,file:"day11_react_router.html"},
  {num:12,file:"day12_context_global_state.html"},
  {num:13,file:"day13_week2_review.html"},
  {num:14,file:"day14_react_query.html"},
  {num:15,file:"day15_advanced_react_query.html"},
  {num:16,file:"day16_react_hook_form.html"},
  {num:17,file:"day17_typescript_react.html"},
  {num:18,file:"day18_tailwind_css.html"},
  {num:19,file:"day19_week3_review.html"},
  {num:20,file:"day20_advanced_patterns.html"},
  {num:21,file:"day21_nextjs_app_router.html"},
  {num:22,file:"day22_auth_clerk.html"},
  {num:23,file:"day23_prisma_database.html"},
  {num:24,file:"day24_api_design.html"},
  {num:25,file:"day25_week4_review.html",current:true},
]
const CURRENT=25
const AVAILABLE=new Set([
  "day1_javascript_fundamentals.html","day2_javascript_arrays_objects.html",
  "day3_functions_async_js.html","day5_dom_events_classes.html",
  "day6_es6_modules_iterators_generators.html","day7_week1_review_project.html",
  "day8_react_essentials.html","day9_react_state_events.html",
  "day10_react_hooks.html","day11_react_router.html",
  "day12_context_global_state.html","day13_week2_review.html",
  "day14_react_query.html","day15_advanced_react_query.html",
  "day16_react_hook_form.html","day17_typescript_react.html",
  "day18_tailwind_css.html","day19_week3_review.html",
  "day20_advanced_patterns.html","day21_nextjs_app_router.html",
  "day22_auth_clerk.html","day23_prisma_database.html",
  "day24_api_design.html","day25_week4_review.html",
])
function navigateTo(file,n){
  if(AVAILABLE.has(file))window.location.href=file
  else showToast(`Day ${n} coming soon — Week 5 incoming! 🚀`)
}
function showToast(msg){
  document.querySelector('.toast')?.remove()
  const t=document.createElement('div');t.className='toast';t.textContent=msg
  t.style.cssText=`position:fixed;bottom:24px;left:50%;transform:translateX(-50%);
    background:var(--surface2);border:1px solid var(--border2);color:var(--text);
    font-size:13px;font-family:'JetBrains Mono',monospace;padding:12px 24px;
    border-radius:10px;z-index:9999;max-width:90vw;text-align:center;
    box-shadow:0 4px 24px rgba(0,0,0,.5);animation:tUp .25s ease;`
  document.head.insertAdjacentHTML('beforeend',`<style>@keyframes tUp{from{opacity:0;transform:translateX(-50%) translateY(12px)}to{opacity:1;transform:translateX(-50%) translateY(0)}}</style>`)
  document.body.appendChild(t);setTimeout(()=>t.remove(),3500)
}