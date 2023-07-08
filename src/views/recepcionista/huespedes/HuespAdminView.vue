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
                    <AdminHuespedesHeader></AdminHuespedesHeader>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import SidebarComponent from '@/components/SidebarComponent.vue';
    import HeaderComponent from '@/components/HeaderComponent.vue';
    import ListSidebarRecepcionista from '@/components/ListSidebarRecepcionista.vue';
    import AdminHuespedesHeader from '@/components/AdminHuespedesTable.vue';
    
    export default{
        name: 'HuespedesRecepView',
        components: {
            SidebarComponent,
            ListSidebarRecepcionista,
            AdminHuespedesHeader,
            HeaderComponent,
        }
    }
</script>
<style>
    @import url('@/css/app.css');
</style>