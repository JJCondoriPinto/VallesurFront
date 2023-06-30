<template>
    <div class="container-edit">
        <div class="form-parent card-show-parent">
            <div class="form">
                <form class="form-update" @submit.prevent="crearHuesped">
                    <input type="hidden" name="estado" value="{{ }}">
                    <div class="card-header">
                        <p>Crear Huesped</p>
                    </div>
                    <div class="card-content">
                        <div class="card-group form-group">
                            <label>Nombres</label>
                            <input class="form-input" type="text" v-model=formData.nombre_huesped required>
                        </div>

                        <div class="card-group form-group">
                            <label>Apellidos</label>
                            <input class="form-input" type="text" v-model=formData.apellido_huesped required>
                        </div>
                        <div class="card-group form-group">
                            <label class="form-label label-radio">Tipo de identificacion</label>
                            <select class="form-input" v-model=formData.tipo_identificacion_huesped>
                                <option value="Dni">Dni</option>
                                <option value="Carnet Extranjeria">Carnet de Extranjeria</option>
                            </select>
                        </div>
                        <div class="card-group form-group">
                            <label>Nro de Documento</label>
                            <input class="form-input" type="text" v-model=formData.identificacion_huesped required>
                        </div>
                        <div class="card-group form-group">
                            <label class="form-label label-radio">Sexo</label>
                            <select class="form-input" v-model=formData.sexo_huesped>
                                <option value="Masculino">Masculino</option>
                                <option value="Femenino">Femenino</option>
                            </select>
                        </div>
                        <div class="card-group form-group">
                            <label>Fecha de Nacimiento</label>
                            <input class="form-input" type="date" v-model=formData.fecha_nacimiento_huesped
                                @input="formatDate" required>
                        </div>
                        <div class="card-group form-group">
                            <label>Nacionalidad</label>
                            <select class="form-input" v-model=formData.nacionalidad_huesped>
                                <option value="Peru">Perú</option>
                                <option value="Chile">Chile</option>
                                <option value="Brasil">Brasil</option>
                                <option value="Argentina">Argentina</option>
                                <option value="Espana">España</option>
                                <option value="Bolivia">Bolivia</option>
                                <option value="Uruguay">Uruguay</option>
                            </select>
                        </div>
                        <div class="card-group form-group">
                            <label>Región</label>
                            <input class="form-input" type="text" v-model=formData.region_huesped required>
                        </div>
                        <div class="card-group form-group">
                            <label>Dirección</label>
                            <input class="form-input" type="text" v-model=formData.direccion_huesped required>
                        </div>
                        <div class="card-group form-group">
                            <label>Teléfono</label>
                            <input class="form-input" type="number" v-model=formData.telefono_huesped required>
                        </div>
                        <div class="card-group form-group">
                            <label>Correo</label>
                            <input class="form-input" type="email" v-model=formData.correo_huesped required>
                        </div>

                        <div class="row">
                            <button class="btn btn-success px-5" type="submit">Registrar Huesped</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';

export default {
    data() {
        return {
            formData: {
                nombre_huesped: '',
                apellido_huesped: '',
                tipo_identificacion_huesped: '',
                identificacion_huesped: '',
                sexo_huesped: '',
                fecha_nacimiento_huesped: '',
                nacionalidad_huesped: '',
                region_huesped: '',
                direccion_huesped: '',
                telefono_huesped: '',
                correo_huesped: '',
            }
        };
    },
    methods: {
        crearHuesped(){
            console.log(this.formData);
            axios.post('/api/huesped',this.formData).then(
                (value)=>{
                    console.log(value);
                    this.$router.push({name:'reservas-create',params: { id: value.data.data._id }})
                }
            )
        },  
        formatDate() {
            const date = new Date(this.formData.fecha_nacimiento_huesped);
            const year = date.getFullYear();
            const month = String(date.getMonth() + 1).padStart(2, '0');
            const day = String(date.getDate()).padStart(2, '0');
            this.formData.fecha_nacimiento_huesped = `${year}-${month}-${day}`;
        }
    }
}
</script>
<style>
.container-edit {
    max-height: 500px;
    overflow: auto;
}
</style>