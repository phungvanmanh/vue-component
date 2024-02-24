<template>
    <div>
        <canvas ref="pieChartCanvas"></canvas>
    </div>
</template>

<script>
import { Chart, registerables } from 'chart.js';
import { onMounted, ref } from 'vue';
Chart.register(...registerables);

export default {
    name: 'pie-chart-component',
    props: {
        chartData: {
            type: Object,
            required: true
        },
        titleChart : {
            type : String,
            default : ""
        }
    },
    setup(props) {
        const pieChartCanvas = ref(null);

        function renderPieChart() {
            const ctx = pieChartCanvas.value.getContext('2d');
            new Chart(ctx, {
                type: 'pie',
                data: props.chartData,
                options: {
                    maintainAspectRatio: false,
                    title: {
                        display: true,
                        text: props.titleChart
                    },
                }
            });
        }

        onMounted(renderPieChart);

        return { pieChartCanvas };
    },
}
</script>
