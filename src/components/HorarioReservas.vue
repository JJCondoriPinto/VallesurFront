<template>
    <div class="contenedor">
        <FullCalendar :options="calendarOptions" class="calendario">

        </FullCalendar>
    </div>
</template>
<style>
.contenedor {
    max-height: max-content;
    margin-bottom: 50px;
    margin-top: 30px;
}

.calendario {
    color: rgb(255, 255, 255);
    text-transform: uppercase;
}

.tippy-box[data-theme~='light'] {
    background-color: yellow;
}
</style>
<script>
import FullCalendar from '@fullcalendar/vue3';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';
import esLocale from '@fullcalendar/core/locales/es';
import tippy from 'tippy.js';
import 'tippy.js/dist/tippy.css'; // Estilos básicos de tippy.js
import 'tippy.js/themes/light.css'; // Estilos del tema "light"

export default {
    components: {
        FullCalendar
    },
    data() {
        return {
            calendarOptions: {
                locale: esLocale,
                height: 400,
                plugins: [
                    dayGridPlugin, interactionPlugin, timeGridPlugin

                ],
                initialView: 'dayGridMonth',
                headerToolbar: {
                    left: 'prev,next,today',
                    center: 'title',
                    right: 'dayGridMonth,timeGridWeek,timeGridDay'
                },
                eventDidMount(info) {
                    // Mostrar un popover con tippy.js cuando el evento es montado
                    //let title = info.event.title;
                    console.log(info.event.start);
                    let options = { year: 'numeric', month: 'long', day: 'numeric' };
                    let formattedStart = info.event.start.toLocaleDateString('es-ES', options);
                    let formattedEnd = info.event.end.toLocaleDateString('es-ES', options);
                    let content = `Desde: ${formattedStart} <br> Hasta: ${formattedEnd} <br> Titular: ${info.event.extendedProps.titular} <br> Tipo Habitacion: ${info.event.title} <br> Nro Habitacion: ${info.event.extendedProps.nro_habitacion} <br> Estado: ${info.event.extendedProps.estado}` ;
                    tippy(info.el, {

                        content,
                        allowHTML: true,
                        trigger: 'mouseenter focus',
                        placement: 'top',
                        theme: 'light'
                    });
                },
            }
        }
    },
    beforeMount() {
        this.$data.calendarOptions.events = {
            url: 'http://localhost:8000/api/reserva-horarios',
            method: 'GET',
            failure: error => {
                console.log(error);
            },
        }
    }
}
</script>