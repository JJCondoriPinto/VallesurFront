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
                            Huespedes Registrados
                        </template>
                    </HeaderComponent>
                    <GerenteHuespedesHeader></GerenteHuespedesHeader>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import SidebarComponent from '@/components/SidebarComponent.vue';
    import HeaderComponent from '@/components/HeaderComponent.vue';

    import ListSidebarRecepcionista from '@/components/ListSidebarRecepcionista.vue';
    import GerenteHuespedesHeader from '@/components/GerenteHuespedesTable';
    
    export default{
        name: 'HuespedesRecepView',
        components: {
            SidebarComponent,
            ListSidebarRecepcionista,
            HeaderComponent,
            GerenteHuespedesHeader
        }
    }
</script>
<style>
    @import url('@/css/app.css');
</style>