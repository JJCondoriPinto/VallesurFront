<template>
    <div>
        <div class="form-parent card-show-parent">
            <div class="form">

                <form class="form-updateUser" @submit.prevent="comprobarExistencia">
                    <div class="card-group form-group">
                        <label class="form-label label-radio">Tipo de identificacion</label>
                        <select class="form-input" v-model=formData.tipo>
                            <option value="dni">Dni</option>
                            <option value="extranjero">Carnet de Extranjeria</option>
                        </select>
                    </div>
                    <div class="card-group form-group">
                        <label class="form-label label-radio">Nro de Documento</label>
                        <input class="form-input" type="number" placeholder="Identificador" v-model=formData.id required>
                    </div>
                    <div class="row">
                        <button class="btn btn-success px-5">Siguiente</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';

    export default{
        data(){
            return{
                formData:{
                    tipo:'',
                    id:''
                }
            };
        },
        methods:{
        comprobarExistencia() {
            axios.get('/api/huesped', {
                params: this.formData
            })
            .then((value) => {
                console.log(value);
                this.$emit('mostrar-alerta', 'An example success alert with an icon', 'check-circle-fill');
                this.$router.push({ name:'reservas-create', params: { id: value.data.data._id } });
            })
            .catch((error) => {
                console.log(error);
                this.$emit('mostrar-alerta', 'An example alert with an icon', 'info-fill');
                if(this.formData.tipo=="dni"){

                    this.$router.push({ name:'reservas-create-huesped',params:{id:this.formData.id} });
                }else{
                    this.$router.push({ name:'reservas-create-huesped',params:{id:"no-auth"} });
                }
            });
        },
    }

}

</script>
<style>
option {
    background-color: #16114f;
    /* Color de fondo deseado */
}
</style>