<template>
    <div class="modal fade" id="scan" v-if="modalAbierto" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
        aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-top ">
            <div class="modal-content " style="background: var(--app-content-secondary-color);">
                <div class="modal-header">
                    <h1 class="modal-title fs-5 text-white" id="staticBackdropLabel">
                        Escanear QR
                    </h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" id="close"></button>
                </div>

                <div class="modal-body">
                    <h4 class="text-center">Enfoque el codigo qr de la reserva</h4>
                    <EscanerQR>

                    </EscanerQR>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" id="cerrar">Cancelar</button>   
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import EscanerQR from '@/components/ReservaEscanerQR.vue';
export default {
    data() {
        return {
            vueComponent: this
        }
    },
    components:{
        EscanerQR
    },
}
</script>