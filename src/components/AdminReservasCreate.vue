<template>
    <div class="container-edit">
        <div class="form-parent card-show-parent">
            <div class="form">
                <form class="form-update" @submit.prevent="hacerReserva">
                    <div class="card-header">
                        <p>Datos de la Reserva</p>
                    </div>
                    <div class="card-content">
                        <div class="card-group form-group">
                            <label>Acompañantes</label>
                            <input class="form-input" type="text" v-model=formData.pax_reserva required>
                        </div>
                        <div class="card-group form-group">
                            <label>Razon Hospedaje</label>
                            <select class="form-input" v-model=formData.razon_hospedaje required>
                                <option value="Trabajo">Trabajo</option>
                                <option value="Otro">Otro</option>
                            </select>
                        </div>
                        <div class="card-group form-group">
                            <label>Destinatario Reserva</label>
                            <select class="form-input" v-model=formData.destinatario_reserva required>
                                <option value="Para mi">Para mi</option>
                                <option value="Otra Persona">Otra Persona</option>

                            </select>
                        </div>
                        <div class="card-group form-group">
                            <label>Fecha Check In</label>
                            <input class="form-input" type="date" v-model=formData.fecha_checkin :min="getFormattedToday()"
                                required>
                        </div>
                        <div class="card-group form-group">
                            <label>Fecha Check Out</label>
                            <input class="form-input" type="date" v-model=formData.fecha_checkout
                                :min="getFormattedCheckInDate()" required>
                        </div>
                        <div class="card-group form-group d-inline">
                            <label>Hora LLegada</label>
                            <select class="form-input" v-model=formData.hora_llegada required>
                                <option value="Indefinido">Indefinido</option>
                                <option value="00:00-01:00">00:00-01:00</option>
                                <option value="01:00-02:00">01:00-02:00</option>
                                <option value="02:00-03:00">02:00-03:00</option>
                                <option value="03:00-04:00">03:00-04:00</option>
                                <option value="04:00-05:00">04:00-05:00</option>
                                <option value="05:00-06:00">05:00-06:00</option>
                                <option value="06:00-07:00">06:00-07:00</option>
                                <option value="07:00-08:00">07:00-08:00</option>
                                <option value="08:00-09:00">08:00-09:00</option>
                                <option value="09:00-10:00">09:00-10:00</option>
                                <option value="10:00-11:00">10:00-11:00</option>
                                <option value="11:00-12:00">11:00-12:00</option>
                                <option value="12:00-00:00">12:00-00:00</option>

                            </select>
                        </div>
                        <input class="form-input " data-bs-toggle="modal" data-bs-target="#Habitaciones" type="text"
                                v-model=formData.id_habitacion_reserva required hidden>

                        <div class="card-group form-group mt-4">
                            <label>Seleccionar Habitacion</label>
                            <input class="form-input " data-bs-toggle="modal" data-bs-target="#Habitaciones" type="text"
                                v-model=nombreHabitacion required>
                        </div>
                        <div>
                            <div class="modal fade modal-lg" id="Habitaciones" data-bs-backdrop="static"
                                data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel"
                                aria-hidden="true">
                                <div class="modal-dialog modal-dialog-centered ">
                                    <div class="modal-content " style="background: var(--app-content-secondary-color);">
                                        <div class="modal-header">
                                            <h1 class="modal-title fs-5 text-white" id="staticBackdropLabel">
                                                Habitaciones Disponibles
                                            </h1>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal"
                                                aria-label="Close" id="close"></button>
                                        </div>

                                        <div class="modal-body">
                                            <div class="table-responsive">
                                                <DataTable :data="habitaciones" :columns="columns"
                                                    class="table table-striped table-bordered display table-hover table-dark"
                                                    :options="{
                                                        select: true,
                                                        responsive: true, autoWidth: false, language: {
                                                            search: 'Buscar...',
                                                            zeroRecords: 'No hay habitaciones para mostrar',
                                                            info: 'Mostrando del _START_ a _END_ de _TOTAL_ registros ',
                                                            infoFiltered: '(Filtrados de _MAX_ registros.)',
                                                            paginate: { first: 'Primero', previous: 'Anterior', next: 'Siguiente', last: 'Último' }
                                                        },
                                                    }">
                                                    <thead>
                                                        <tr>
                                                            <th>id</th>
                                                            <th>#</th>
                                                            <th>Tipo Habitacion</th>
                                                            <th>Imagen</th>
                                                            <th>Precio</th>
                                                        </tr>
                                                    </thead>
                                                </DataTable>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row mt-5">
                            <button class="btn btn-success px-5" type="submit">Generar Reserva</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
<style>
@import 'datatables.net-bs5';



.table-responsive {
    max-height: 500px;
    color: white;
    padding-right: 15px;
    margin-top: 10px;
}
</style>
<script>
import DataTable from 'datatables.net-vue3';
import DataTableLib from 'datatables.net-vue3';
import ButtonsHtml5 from 'datatables.net-buttons/js/buttons.html5';
import pdfmake from 'pdfmake';
import 'datatables.net-responsive-bs5';
import axios from 'axios';
import 'datatables.net-select';
import $ from 'jquery';


DataTable.use(DataTableLib);
DataTable.use(pdfmake);
DataTable.use(ButtonsHtml5);


export default {
    components: {
        DataTable
    },
    props: ['id'],
    data() {
        return {
            nombreHabitacion:'',
            habitaciones: null,
            columns: [
                {
                    data: '_id',
                    visible: false
                },
                {
                    data: null, render: function (data, type, row, meta) { return `${meta.row + 1}` }
                },
                { data: 'tipo_habitacion' },
                {
                    data: null, render: function (data) {
                        return `<img src=${data.imagen} alt="Imagen en miniatura" width="50" height="50">`
                        //return `<h1>${data.imagen} </h1>`
                    }
                },
                {
                    data: null, render: function (data) {
                        return `<h4>S/. ${data.precio} </h4>`
                    }
                },
            ],
            formData: {
                id_huesped: this.id,
                cantidad_dias_reserva: '',
                pax_reserva: '',
                id_habitacion_reserva: '0',
                tipo_reserva: 'Presencial',
                razon_hospedaje: '',
                destinatario_reserva: '',
                hora_llegada: '',
                fecha_checkin: '',
                fecha_checkout: ''
            }
        }
    },
    mounted() {
        this.getHabitaciones();
        const vueComponent = this;
        this.$nextTick(() => {
            const table = $('.table').DataTable();
            table.on('select', function (e, dt, type, indexes) {
                var rowData = table.rows(indexes).data().toArray();

                console.log(rowData[0]);
                vueComponent.nombreHabitacion=rowData[0].tipo_habitacion;
                vueComponent.updateHabitacionSelected(rowData[0]._id);
                vueComponent.closeModal();
            })
        });
    },
    methods: {
        closeModal(){
            $('#close').click();
        },
        getHabitaciones() {
            axios.get('/api/habitaciones').then((value) => {
                console.log(value);
                this.habitaciones = value.data.data;
            })
        },
        updateHabitacionSelected(id) {
            this.formData.id_habitacion_reserva = id;
        },
        hacerReserva() {
            const fecha1 = new Date(this.formData.fecha_checkin);
            const fecha2 = new Date(this.formData.fecha_checkout);

            const diferenciaEnMilisegundos = Math.abs(fecha2 - fecha1);
            const diferenciaEnDias = Math.ceil(diferenciaEnMilisegundos / (1000 * 60 * 60 * 24));
            this.formData.cantidad_dias_reserva = diferenciaEnDias;
            console.log(this.formData);
            axios.post('/api/reserva',this.formData).then((value)=>{
                console.log(value);
                this.$router.push({name:'recepcionista-reservas'});
            })
        },
        getFormattedToday() {
            const today = new Date();
            const yyyy = today.getFullYear();
            let mm = today.getMonth() + 1;
            let dd = today.getDate();

            if (mm < 10) {
                mm = '0' + mm;
            }
            if (dd < 10) {
                dd = '0' + dd;
            }

            return `${yyyy}-${mm}-${dd}`;
        },
        getFormattedCheckInDate() {
            if (this.formData.fecha_checkin) {
                const checkInDate = new Date(this.formData.fecha_checkin);
                const yyyy = checkInDate.getFullYear();
                let mm = checkInDate.getMonth() + 1;
                let dd = checkInDate.getDate() + 2;

                if (mm < 10) {
                    mm = '0' + mm;
                }
                if (dd < 10) {
                    dd = '0' + dd;
                }

                return `${yyyy}-${mm}-${dd}`;
            } else {
                // Si el campo de check-in está vacío, se permite seleccionar cualquier fecha
                return '';
            }
        }
    }
}
</script>
<style scoped>
@import url('@/css/app.css');

.container-edit {
    max-height: 500px;
    overflow: auto;
}

.form-input {
    margin-right: 5px;
}

/* Estilos para las opciones del combobox */
option {
    background-color: #16114f;
    /* Color de fondo deseado */
}</style>