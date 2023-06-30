<template>
    <div class="row">
        <div class="">
            <div class="table-responsive">
                <DataTable :data="products" :columns="columns"
                    class="table table-striped table-bordered display table-hover table-dark" :options="{
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
                            <th>Identificacion</th>
                            <th>Nombres</th>
                            <th>Apellidos</th>
                            <th>Sexo</th>
                            <th>Nacionalidad</th>
                            <th>Telefono</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                </DataTable>
            </div>
        </div>
    </div>
</template>
<style >
@import url('@/css/app.css');
@import 'datatables.net-bs5';

.table-responsive {
    max-height: 500px;
    color: white;
    padding-right: 15px;
    margin-top: 50px;
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

    },
    data() {
        return {
            products: null,
            columns: [
                {
                    data: '_id',
                    visible: false
                },
                {
                    data: null, render: function (data, type, row, meta) { return `${meta.row + 1}` }
                },
                { data: 'identificacion' },
                { data: 'nombres' },
                { data: 'apellidos' },
                { data: 'sexo' },
                { data: 'nacionalidad' },
                { data: 'telefono' },
                {
                    data: null, render: function () {
                        return `<td>
                        <button id="editar" class="btn btn-sm btn-primary"><i class="fa-solid fa-pen-to-square"></i></button>
                        <button id="eliminar" class="btn btn-sm btn-danger"><i class="fa-solid fa-trash"></i></button>
                        </td>`;
                    }
                },
            ],
            botones: [
                {
                    title: 'Reporte de Huespedes',
                    extend: 'excelHtml5',
                    text: '<i class="fa-solid fa-file-excel" ></i> Excel',
                    className: 'btn btn-success'
                },
                {
                    title: 'Reporte de Huespedes',
                    extend: 'pdfHtml5',
                    text: '<i class="fa-solid fa-file-pdf" ></i> PDF',
                    className: 'btn btn-danger'
                },
                {
                    title: 'Reporte de Huespedes',
                    extend: 'print',
                    text: '<i class="fa-solid fa-print" ></i> Imprimir',
                    className: 'btn btn-dark'
                },
                {
                    title: 'Reporte de Huespedes',
                    extend: 'copy',
                    text: '<i class="fa-solid fa-copy" ></i> Copiar Contenido',
                    className: 'btn btn-light'
                },

            ]
        }
    },
    mounted() {
        this.getProducts();
        this.$nextTick(() => {
            const table = $('.table').DataTable();
            table.on('click', '#editar', (event) => {
                event.stopPropagation();
                const rowData = table.row($(event.currentTarget).closest('tr')).data();
                console.log(`Editar registro con ID: ${rowData._id}`);
                this.editarHuesped(rowData._id);

            });
            table.on('click', '#eliminar', (event) => {
                event.stopPropagation();
                const rowData = table.row($(event.currentTarget).closest('tr')).data();
                if (confirm('¿Estás seguro de que deseas eliminar este elemento?')) {
                    axios.delete('api/huespedes-delete/'+rowData._id).then((value)=>{
                        console.log(value);
                        location.reload();
                    })
                } else {
                    // El usuario hizo clic en "Cancelar"
                    // No se realiza ninguna acción
                }
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

        editarHuesped(id) {
            this.$router.push({ name: 'gerente-huespedes-edit', params: { id: id } });
        },
        getProducts() {
            axios.get("/api/huespedes").then(
                response => (
                    console.log(response),
                    this.products = response.data.data
                )
            );
        },
        onRowClick(id) {
            this.$router.push({ name: 'gerente-huespedes-show', params: { id: id } });
        }
    }
}

</script>