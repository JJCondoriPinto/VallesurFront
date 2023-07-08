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
                            Reservas
                        </template>
                        <template #actions>
                            <ActionsReserva>

                            </ActionsReserva>
                        </template>
                    </HeaderComponent>
                    <BotonesReserva>

                    </BotonesReserva>
                    <HorarioReserva>
                        
                    </HorarioReserva>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import SidebarComponent from '@/components/SidebarComponent.vue';
import HeaderComponent from '@/components/HeaderComponent.vue';
import ListSidebarRecepcionista from '@/components/ListSidebarRecepcionista.vue';
import ActionsReserva from '@/components/ActionsReserva.vue';
import BotonesReserva from '@/components/BotonesReserva.vue';
import HorarioReserva from '@/components/HorarioReservas.vue';
export default{
    components: {
        SidebarComponent,
        ListSidebarRecepcionista,
        HeaderComponent,
        ActionsReserva,
        BotonesReserva,
        HorarioReserva
    },
    

}
</script>