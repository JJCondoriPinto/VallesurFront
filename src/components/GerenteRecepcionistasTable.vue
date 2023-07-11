<template>
    <div class="row">
        <div class="table-container">
            <div >
                <DataTable :data="products" :columns="columns" id="tabla" class="tablita" :options="{
                    responsive: true, autoWidth: true, dom: 'Bfrtip', language: {
                        search: 'Buscar...',
                        zeroRecords: 'No hay registros para mostrar',
                        info: 'Mostrando del _START_ a _END_ de _TOTAL_ registros',
                        infoFiltered: '(Filtrados de _MAX_ registros.)',
                        paginate: { first: 'Primero', previous: 'Anterior', next: 'Siguiente', last: 'Último' }
                    }, buttons: botones
                }">
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>#</th>
                            <th>Identificación</th>
                            <th>Nombres</th>
                            <th>Apellidos</th>
                            <th>Turno</th>
                            <th>Telefono</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                </DataTable>
                <ModalEliminar :id="selectedID">

                </ModalEliminar>
                <ModalInfo :title="titleModal" :body="bodyModal">

                </ModalInfo>
                <button hidden data-bs-toggle="modal" data-bs-target="#ModalInfo" id="ModalInfoAbrir"></button>
            </div>
        </div>
    </div>
</template>
<style>
@import url('@/css/app.css');
@import 'datatables.net-bs5';

.table-container{
    color: #fff;
    margin-top: 50px;
    margin-bottom: 40px;
}
</style>
<script>
import axios from 'axios';
import DataTable from 'datatables.net-vue3';
import DataTableLib from 'datatables.net-vue3';
import Buttons from 'datatables.net-buttons-bs5';
import ButtonsHtml5 from 'datatables.net-buttons/js/buttons.html5';
import print from 'datatables.net-buttons/js/buttons.print';
import pdfmake from 'pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import 'datatables.net-responsive-bs5';
import JsZip from 'jszip';
import $ from 'jquery';
import ModalInfo from '@/components/ModalInfo.vue';
import ModalEliminar from '@/components/ModalConfirmarEliminarHuesped.vue';


pdfmake.vfs = pdfFonts.pdfMake.vfs;

window.JSZip = JsZip;
DataTable.use(DataTableLib);
DataTable.use(pdfmake);
DataTable.use(ButtonsHtml5);
DataTable.use(print);
DataTable.use(Buttons)

export default {
    components: {
        DataTable,
        ModalInfo,
        ModalEliminar,
    },
    data() {
        return {
            titleModal: 'Atención',
            bodyModal: '',
            selectedID: null,
            products: null,
            columns: [
                {
                    data: '_id',
                    visible: false
                },
                {
                    data: null, render: function (data, type, row, meta) { return `${meta.row + 1}` }
                },
                { data: 'dni' },
                { data: 'nombres' },
                { data: 'apellidos' },
                { data: 'turno' },
                { data: 'telefono', },
                {
                    data: null, render: function () {

                        return `<button id="eliminar" class="btn btn-danger">
                      Eliminar
                    </button>`
                    }
                }

            ],
            botones: [
                {
                    title: 'Reporte de Huespedes',
                    extend: 'excelHtml5',
                    text: '<i class="fa-solid fa-file-excel" ></i> Excel',
                    className: 'btn boton-acciones rounded-0'
                },
                {
                    title: 'Reporte de Huespedes',
                    extend: 'pdfHtml5',
                    text: '<i class="fa-solid fa-file-pdf" ></i> PDF',
                    className: 'btn boton-acciones rounded-0'
                },
                {
                    title: 'Reporte de Huespedes',
                    extend: 'print',
                    text: '<i class="fa-solid fa-print" ></i> Imprimir',
                    className: 'btn boton-acciones rounded-0'
                },
                {
                    title: 'Reporte de Huespedes',
                    extend: 'copy',
                    text: '<i class="fa-solid fa-copy" ></i> Copiar Contenido',
                    className: 'btn boton-acciones rounded-0'
                },

            ]
        }
    },
    mounted() {
        this.getProducts();
        this.$nextTick(() => {
            const table = $('#tabla').DataTable();
            table.on('click', '#eliminar', (event) => {
                event.stopPropagation();
                const rowData = table.row($(event.currentTarget).closest('tr')).data();
                console.log(rowData);
                this.deleteRecep(rowData._id);
            });
            table.on('click', 'tr', (event) => {
                const rowData = table.row(event.currentTarget).data();
                if (rowData != null) {
                    console.log(rowData);
                    this.onRowClick(rowData._id);
                }
            });
        });
    },
    methods: {
        deleteRecep(id) {
            if (confirm('¿Está seguro que desea eliminar a este recepcionista?')) {
                axios.delete('api/recepcionistas', { params: { id: id } })
                    .then(res => {
                        if (res.status == 200) {
                            document.getElementById(id).remove();
                        }
                    })
                    .catch(err => {
                        console.log(err);
                    })
            }
        },
        imprimir(data) {
            console.log(data);
        },
        getProducts() {
            axios.get("api/recepcionistas").then(
                response => (
                    console.log(response),
                    this.products = response.data.data
                )
            );
        },

        onRowClick(id) {
            this.$router.push({ name: 'gerente-recepcionistas-show', params: { id: id } });
        }
    }
}

</script>