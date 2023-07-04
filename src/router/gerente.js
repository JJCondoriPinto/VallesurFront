import HomeGerenteView from "@/views/gerente/HomeGerenteView.vue";
import HuespedesGerenteView from "@/views/gerente/huespedes/HuespGerentView.vue";
import HuespedesGerenteShow from "@/views/gerente/huespedes/HuespGerentShow.vue";
import HuespedesGerenteEdit from "@/views/gerente/huespedes/HuespGerentEdit.vue";
import ReportesGerente from "@/views/gerente/gerente_reportes/ReportesGerente.vue";
import ReportesGerentePersonas from "@/views/gerente/gerente_reportes/ReportesGerentePersonas";
import ReportesGerentePrecios from "@/views/gerente/gerente_reportes/ReportesGerentePrecios";

const routes_gerente = [
  {
    path: "",
    name: "gerente-home",
    component: HomeGerenteView,
  },
  {
    path: "huespedes",
    name: "gerente-huespedes",
    component: HuespedesGerenteView,
  },
  {
    path: "huespedes-show/:id",
    name: "gerente-huespedes-show",
    component: HuespedesGerenteShow,
  },
  {
    path: "huespedes-edit/:id",
    name: "gerente-huespedes-edit",
    component: HuespedesGerenteEdit,
  },
  {
    path: "habitaciones",
    name: "gerente-habitaciones",
  },
  {
    path: "recepcionistas",
    name: "gerente-recepcionistas",
  },
  {
    path: "reportes",
    name: "gerente-reportes",
    component: ReportesGerente,
  },

  {
    path: "reportes/precios",
    name: "gerente-reportes-precios",
    component: ReportesGerentePrecios
  },

  {
    path: "reportes/personas",
    name: "gerente-reportes-personas",
    component: ReportesGerentePersonas
  },

  {
    path: "",
    name: "gerente-create-habitacion",
  },
];

export default routes_gerente;
