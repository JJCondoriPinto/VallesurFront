<template>
    <div class="html">
        <div class="body-app">
            <div class="app-container">
                <SidebarComponent>
                    <ListSidebarRecepcionista />
                </SidebarComponent>

                <div class="app-content">
                    <HeaderComponent>
                        <template #title>
                            Escanear QR
                        </template>

                    </HeaderComponent>
                    <EscanerQR>

                    </EscanerQR>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import SidebarComponent from '@/components/SidebarComponent.vue';
import HeaderComponent from '@/components/HeaderComponent.vue';
import ListSidebarRecepcionista from '@/components/ListSidebarRecepcionista.vue';
import EscanerQR from '@/components/ReservaEscanerQR.vue';

export default {
    name: 'ReservasRecepScan',
    components: {
        SidebarComponent,
        ListSidebarRecepcionista,
        HeaderComponent,
        EscanerQR
    },
    

}
</script>
<style>
@import url('@/css/app.css');
</style>