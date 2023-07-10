import HomeRecepView from '@/views/recepcionista/HomeRecepView.vue';
import RecepcionistaReservasView from '@/views/recepcionista/reservas/ReservAdminView.vue';
import RecepcionistaHuespedesView from '@/views/recepcionista/huespedes/HuespAdminView.vue';
import RecepcionistaReservaGenerateCheckInView from '@/views/recepcionista/reservas/ReservCheckInAdminView.vue';
import ReservasCreateAuth from '@/views/recepcionista/reservas/ReservCreateAuth.vue';
import ReservasCreateUser from '@/views/recepcionista/reservas/ReservCreateHuesped.vue';
import ReservasCreate from '@/views/recepcionista/reservas/ReservCreate.vue';
import ReservasEditarRecepView from '@/views/recepcionista/reservas/ReservEditView.vue';
import CheckinView from '@/views/recepcionista/checkin-checkout/CheckinView';
import CheckOutView from '@/views/recepcionista/checkin-checkout/CheckoutView';
import GenerateCheckout from '@/views/recepcionista/checkin-checkout/GenerateCheckout';
import ReportesRecepcionista from "@/views/recepcionista/recepcionista_reportes/ReportesRecepcionista";
import ReportesRecepcionistaPrecios from "@/views/recepcionista/recepcionista_reportes/ReportesRecepcionistaPrecios";
import ReportesRecepcionistaPersonas from "@/views/recepcionista/recepcionista_reportes/ReportesRecepcionistaPersonas";
import ReservAdminShow from "@/views/recepcionista/reservas/ReservAdminShow";
import ReservasRecepScan from "@/views/recepcionista/reservas/ReservScanQR";
import HabitRecepShowView from '@/views/recepcionista/habitaciones/HabitRecepShowView';
import HabitRecepView from '@/views/recepcionista/habitaciones/HabitRecepView';
import CheckinAdminShow from "@/views/recepcionista/checkin-checkout/CheckinAdminShow";
import CheckinEditView from "@/views/recepcionista/checkin-checkout/CheckinEditView";
import CheckoutAdminShow from "@/views/recepcionista/checkin-checkout/CheckoutAdminShow";

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
    children: [
      {
        path: "",
        name: "recepcionista-habitaciones",
        component: HabitRecepView,
      },
      {
        path: ":id",
        name: "recepcionista-habitaciones-show",
        component: HabitRecepShowView,
      },
    ]
  },
  {
    path: "reservas",
    name: "recepcionista-reservas",
    component: RecepcionistaReservasView
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
    component: CheckinView 
  },
  {
    path: "checkin-show/:id",
    name: "checkin-reservas-show",
    component: CheckinAdminShow
  },
  {
    path: "checkin-editar/:id",
    name: "recepcionista-editar-checkin",
    component: CheckinEditView
  },
  
  {
    path: "checkout",
    name: "recepcionista-check-out",
    component: CheckOutView
  },
  {
    path: "checkout-show/:id",
    name: "checkout-reservas-show",
    component: CheckoutAdminShow
  },
  {
    path: "checkout-generate/:id",
    name: "recepcionista-check-out-generate",
    component: GenerateCheckout
  },

  {
    path: "reportes",
    name: "recepcionista-reportes",
    component: ReportesRecepcionista
  },

  {
    path: "reportes/precios",
    name: "recepcionista-reportes-precios",
    component: ReportesRecepcionistaPrecios
  },

  {
    path: "reportes/personas",
    name: "recepcionista-reportes-personas",
    component: ReportesRecepcionistaPersonas
  },
];

export default routes_recepcionista;