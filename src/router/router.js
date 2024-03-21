import { createRouter, createWebHistory } from 'vue-router'
import LoginComp from '../components/auth/LoginComp.vue'
import ReconcilationComp from '../components/bonvoy_wash_invoiceModule/reconciltaion/ReconcilationComp.vue'
import BonvoyWashInvoiceModule from '../components/bonvoy_wash_invoiceModule/BonvoyWashInvoiceModule.vue'
import HomeComp from '../components/home/HomeComp.vue'
import GlobalDashbooard from '../components/global_dashboard/GlobalDashboard.vue'
// import isAuthenticated from '@/components/auth/authguard/authguard'

const routes = [
  {
    path: '/',
    component: LoginComp,
  },
  {
    path: '/home',
    component: HomeComp,
    redirect: '/home/dashboard',
    meta: { requiresAuth: true }, // This route requires authentication

    children: [
      {
        path: 'dashboard',
        component: GlobalDashbooard,
        meta: { requiresAuth: true }, // This route requires authentication

      },
      {
        path: 'bonvoy_wash_invoice',
        component: BonvoyWashInvoiceModule,
        meta: { requiresAuth: true }, // This route requires authentication

        children: [
          {
            path: '',
            redirect: 'bonvoy_wash_invoice/reconcilation',
          },
          {
            path: 'reconcilation',
            component: ReconcilationComp


          }

        ]
      }
    ]
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  let isAuthenticated = localStorage.getItem('user') !== null;
  // Check if the route requires authentication
  if (to.meta.requiresAuth) {
    if (isAuthenticated) {
      next();

    } else {
      next('/');
    }
  } else if (to.path == '/') {
    if (isAuthenticated) {
      next('/home');
    } else {
      next();
    }


  }else{
    next('/')
  }
});
export default router
