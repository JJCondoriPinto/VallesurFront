<template>
  <div class="container">
    <div class="row justify-content-end">
      <div class="col-auto mt-3">
        <button class="btn btn-primary margin-button" @click="escanearQR">
          Escanear QR
        </button>

        <button class="btn btn-success" @click="generarReserva">
          Generar Reserva
        </button>
      </div>
    </div>
    <ModalScan>

    </ModalScan>
  </div>
</template>
<script>
import ModalScan from '@/components/ModalScan.vue';
export default {
  methods: {
    generarReserva() {
      this.$router.push({ name: 'reservas-create-auth' });
    },
    escanearQR() {
      this.$router.push({ name: 'reservas-scan-qr' });
    }
  },
  components: {
    ModalScan
  }
}
</script>
<style>
.margin-button {
  margin-right: 10px;
}
</style>