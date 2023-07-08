import HomeRecepView from '@/views/recepcionista/HomeRecepView.vue'
import RecepcionistaReservasView from '@/views/recepcionista/reservas/ReservAdminView.vue';
import RecepcionistaHuespedesView from '@/views/recepcionista/huespedes/HuespAdminView.vue';
import RecepcionistaReservaGenerateCheckInView from '@/views/recepcionista/reservas/ReservCheckInAdminView.vue';
import ReservasCreateAuth from '@/views/recepcionista/reservas/ReservCreateAuth.vue';
import ReservasCreateUser from '@/views/recepcionista/reservas/ReservCreateHuesped.vue'
import ReservasCreate from '@/views/recepcionista/reservas/ReservCreate.vue';
import ReservasEditarRecepView from '@/views/recepcionista/reservas/ReservEditView.vue';
import ReservAdminShow from '@/views/recepcionista/reservas/ReservAdminShow.vue';
import ReservasRecepScan from '@/views/recepcionista/reservas/ReservScanQR.vue';
import RecepcionistaReservasHorariosView from '@/views/recepcionista/reservas/ReservHorariosView';

const routes_recepcionista = [
  {
    path: "",
    name: "recepcionista-home",
    component: HomeRecepView,
  },
  {
    path: "huespedes",
    name: "recepcionista-huespedes",
    component: RecepcionistaHuespedesView
  },
  {
    path: "habitaciones",
    name: "recepcionista-habitaciones",
  },
  {
    path: "reservas",
    name: "recepcionista-reservas",
    component: RecepcionistaReservasView
  },
  {
    path: "reservas-horario",
    name: "recepcionista-reservas-horario",
    component: RecepcionistaReservasHorariosView
  },
  {
    path: "reservas-show/:id",
    name: "recepcionista-reservas-show",
    component: ReservAdminShow
  },
  {
    path: "reservas-editar/:id",
    name: "recepcionista-editar-reservas",
    component: ReservasEditarRecepView
  },
  {
    path: "reservas-create-1",
    name: "reservas-create-auth",
    component: ReservasCreateAuth
  },
  {
    path: "reservas-create-2",
    name: "reservas-create-huesped",
    component: ReservasCreateUser
  },
  {
    path: "reservas-create-3/:id",
    name: "reservas-create",
    component: ReservasCreate
  },
  {
    path: "reservas-checkin/:id",
    name: "recepcionista-generate-checkin",
    component: RecepcionistaReservaGenerateCheckInView
  },
  {
    path: "reservas-scan",
    name: "reservas-scan-qr",
    component: ReservasRecepScan
  },
  {
    path: "check",
    name: "recepcionista-check",
  },
  {
    path: "reportes",
    name: "recepcionista-reportes",
  },
  {
    path: "cochera",
    name: "recepcionista-cochera",
  },
];

export default routes_recepcionista;