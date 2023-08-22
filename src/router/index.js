import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Register from '../views/Register.vue'
import Login from '../views/Login.vue'
import TrainingCalender from '../views/TrainingCalender.vue'
import HrCertifications from '../views/HrCertifications.vue'
import Chra from '../views/Chra.vue'
import CertifiedHumanResource from '../views/CertifiedHumanResourceAuditors.vue'
import CourseOverview from '../views/CourseOverview.vue'
import Designation from '../views/Designation.vue'
import CourseOutline from '../views/CourseOutline.vue'
import Requirements from '../views/Requirements.vue'
import CHRATrainingCalender from '../views/CHRA-TrainingCalender.vue'
import RegistrationCertificate from '../views/Registration-Certificate.vue'

import Ctmp from '../views/Ctmp.vue'
import CTMPCertifiedHumanResource from '../views/CTMP-CertifiedHumanResource.vue'
import CTMPCourseOverview from '../views/CTMP-CourseOverview.vue'
import CTMPDesignation from '../views/CTMP-Designation.vue'
import CTMPCourseOutline from '../views/CTMP-CourseOutline.vue'
import CTMPRequirements from '../views/CTMP-Requirements.vue'
import CTMPTrainingCalender from '../views/CTMP-TrainingCalender.vue'
import CTMPRegistrationCertificate from '../views/CTMP-RegistrationCertificate.vue'

import Chcc from '../views/Chcc.vue'
import CHCCCertifiedHumanResource from '../views/CHCC-CertifiedHumanResource.vue'
import CHCCCourseOverview from '../views/CHCC-CourseOverview.vue'
import CHCCDesignation from '../views/CHCC-Designation.vue'
import CHCCCourseOutline from '../views/CHCC-CourseOutline.vue'
import CHCCRequirements from '../views/CHCC-Requirements.vue'
import CHCCTrainingCalender from '../views/CHCC-TrainingCalender.vue'
import CHCCRegistrationCertificate from '../views/CHCC-RegistrationCertificate.vue'

import Ctdt from '../views/Ctdt.vue'
import CTDTCertifiedHumanResource from '../views/CTDT-CertifiedHumanResource.vue'
import CTDTCourseOverview from '../views/CTDT-CourseOverview.vue'
import CTDTDesignation from '../views/CTDT-Designation.vue'
import CTDTCourseOutline from '../views/CTDT-CourseOutline.vue'
import CTDTRequirements from '../views/CTDT-Requirements.vue'
import CTDTTrainingCalender from '../views/CTDT-TrainingCalender.vue'
import CTDTRegistrationCertificate from '../views/CTDT-RegistrationCertificate.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/trainingCalender',
      name: 'trainingCalender',
      component: TrainingCalender
    },
    {
      path: '/HrCertifications',
      name: 'HrCertifications',
      component: HrCertifications,
      redirect:{
        name:"certifiedHumanResource"
      },
      children:[
        {
          path: '/HrCertifications/chra',
          name: 'chra',
          component: Chra,
          redirect:{
            name:"certifiedHumanResource"
          },
          children:[
              {
              path: '/certifiedHumanResource',
              name:'certifiedHumanResource',
              component: CertifiedHumanResource
              },
              {
                path: '/courseoverview',
                name:'courseoverview',
                component: CourseOverview
                },
                {
                  path: '/courseoutline',
                  name:'courseoutline',
                  component: CourseOutline
                  },
                  {
                    path: '/designation',
                    name:'designation',
                    component: Designation
                    },
                    {
                      path: '/requirements',
                      name:'requirements',
                      component: Requirements
                      },
                      {
                        path: '/chra-trainingcalender',
                        name:'chratrainingcalender',
                        component: CHRATrainingCalender
                        },
                        {
                          path: '/registrationcertificate',
                          name:'registrationcertificate',
                          component: RegistrationCertificate
                          }
          ]
        },
        
        {
          path: '/HrCertifications/ctmp',
          name: 'ctmp',
          component: Ctmp,
          redirect:{
            name:"ctmp-certifiedHumanResource"
          },
          children:[
              {
              path: '/ctmp-certifiedHumanResource',
              name:'ctmp-certifiedHumanResource',
              component: CTMPCertifiedHumanResource
              },
              {
                path: '/ctmp-courseoverview',
                name:'ctmp-courseoverview',
                component: CTMPCourseOverview
                },
                {
                  path: '/ctmp-courseoutline',
                  name:'ctmp-courseoutline',
                  component: CTMPCourseOutline
                  },
                  {
                    path: '/ctmp-designation',
                    name:'ctmp-designation',
                    component: CTMPDesignation
                    },
                    {
                      path: '/ctmp-requirements',
                      name:'ctmp-requirements',
                      component: CTMPRequirements
                      },
                      {
                        path: '/ctmp-trainingcalender',
                        name:'ctmp-trainingcalender',
                        component: CTMPTrainingCalender
                        },
                        {
                          path: '/ctmp-registrationcertificate',
                          name:'ctmp-registrationcertificate',
                          component: CTMPRegistrationCertificate
                          }
          ]
        },
        {
          path: '/HrCertifications/chcc',
          name: 'chcc',
          component: Chcc,
          redirect:{
            name:"chcc-certifiedHumanResource"
          },
          children:[
              {
              path: '/chcc-certifiedHumanResource',
              name:'chcc-certifiedHumanResource',
              component: CHCCCertifiedHumanResource
              },
              {
                path: '/chcc-courseoverview',
                name:'chcc-courseoverview',
                component: CHCCCourseOverview
                },
                {
                  path: '/chcc-courseoutline',
                  name:'chcc-courseoutline',
                  component: CHCCCourseOutline
                  },
                  {
                    path: '/chcc-designation',
                    name:'chcc-designation',
                    component: CHCCDesignation
                    },
                    {
                      path: '/chcc-requirements',
                      name:'chcc-requirements',
                      component: CHCCRequirements
                      },
                      {
                        path: '/chcc-trainingcalender',
                        name:'chcc-trainingcalender',
                        component: CHCCTrainingCalender
                        },
                        {
                          path: '/chcc-registrationcertificate',
                          name:'chcc-registrationcertificate',
                          component: CHCCRegistrationCertificate
                          }
          ]
        },
        {
          path: '/HrCertifications/ctdt',
          name: 'ctdt',
          component: Ctdt,
          redirect:{
            name:"ctdt-certifiedHumanResource"
          },
          children:[
              {
              path: '/ctdt-certifiedHumanResource',
              name:'ctdt-certifiedHumanResource',
              component: CTDTCertifiedHumanResource
              },
              {
                path: '/ctdt-courseoverview',
                name:'ctdt-courseoverview',
                component: CTDTCourseOverview
                },
                {
                  path: '/ctdt-courseoutline',
                  name:'ctdt-courseoutline',
                  component: CTDTCourseOutline
                  },
                  {
                    path: '/ctdt-designation',
                    name:'ctdt-designation',
                    component: CTDTDesignation
                    },
                    {
                      path: '/ctdt-requirements',
                      name:'ctdt-requirements',
                      component: CTDTRequirements
                      },
                      {
                        path: '/ctdt-trainingcalender',
                        name:'ctdt-trainingcalender',
                        component: CTDTTrainingCalender
                        },
                        {
                          path: '/ctdt-registrationcertificate',
                          name:'ctdt-registrationcertificate',
                          component: CTDTRegistrationCertificate
                          }
          ]
        },
      ]
    },
    
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
