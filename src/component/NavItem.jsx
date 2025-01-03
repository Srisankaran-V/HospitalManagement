// import React from 'react'

export const navItems = [
        {
          id: 1,
          title: 'Home',
          path: '/',
          cName: 'nav-item'
        },
        {
          id: 2,
          title: 'doctor',
          path: '/docotr',
          cName: 'nav-item',
          children: [
            {
              id: 1,
              title: 'Appoitment',
              path: '/appoitment',
              cName: 'submenu-item'
            },
            {
              id: 2,
              title: 'Schedules',
              path: '/schedules',
              cName: 'submenu-item'
            },
          ]
        },
        // {
        //   id: 3,
        //   title: 'Patient',
        //   path: '/patient',
        //   cName: 'nav-item',
        //   children: [
        //     {
        //       id: 1,
        //       title: 'Add Patient',
        //       path: '/add_patient',
        //       cName: 'submenu-item'
        //     },
        //     {
        //       id: 2,
        //       title: 'All Patients',
        //       path: '/all_patients',
        //       cName: 'submenu-item'
        //     },
        //   ]
        // },
        // {
        //   id: 4,
        //   title: 'Stats',
        //   path: '/stats',
        //   cName: 'nav-item',
        //   children: [
        //     {
        //       id: 1,
        //       title: 'QA Job Selector',
        //       path: '/qaindex',
        //       cName: 'submenu-item'
        //     },
        //     {
        //       id: 2,
        //       title: 'View QA Results',
        //       path: '/finished_qa_jobs',
        //       cName: 'submenu-item'
        //     },
        //   ]
        // },
        // {
        //   id: 5,
        //   title: 'Tools',
        //   path: '/tools',
        //   cName: 'nav-item'
        // },
        // {
        //   id: 6,
        //   title: 'Sheets',
        //   path: '/sheets',
        //   cName: 'nav-item'
        // },
        // {
        //   id: 7,
        //   title: 'My Account',
        //   path: '/personal',
        //   cName: 'nav-item'
        // },
      ];


