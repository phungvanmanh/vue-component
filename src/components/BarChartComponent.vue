<template>
    <div>
        <canvas ref="barChartCanvas"></canvas>
    </div>
</template>

<script>
import { Chart, registerables } from 'chart.js';
import { onMounted, ref } from 'vue';
Chart.register(...registerables);

export default {
    name: 'bar-chart-component',
    props: {
        chartData: {
            type: Object,
            required: true
        }
    },
    setup(props) {
        const barChartCanvas = ref(null);

        function renderBarChart() {
            const ctx = barChartCanvas.value.getContext('2d');
            new Chart(ctx, {
                type: 'bar',
                data: props.chartData,
                options: {
                    maintainAspectRatio: false,
                    legend: {
                        display: true,
                        labels: {
                            color: '#585757',
                            boxWidth: 40
                        }
                    },
                    tooltips: {
                        enabled: true
                    },
                    scales: {
                        x: {
                            beginAtZero: true,
                            ticks: {
                                color: '#585757'
                            },
                            grid: {
                                display: true,
                                color: "rgba(0, 0, 0, 0.07)"
                            }
                        },
                        y: {
                            beginAtZero: true,
                            ticks: {
                                color: '#585757'
                            },
                            grid: {
                                display: true,
                                color: "rgba(0, 0, 0, 0.07)"
                            }
                        }
                    }
                }
            });
        }

        onMounted(renderBarChart);

        return { barChartCanvas }
    },
}
</script>
