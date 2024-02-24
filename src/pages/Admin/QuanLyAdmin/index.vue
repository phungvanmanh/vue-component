<template>
    <div class="row">
        <div class="col-xl-3 col-lg-3 col-md-3 col-sm-12">
            <div class="card">
                <div class="card-header">Thêm Mới Admin</div>
                <div class="card-body"> 
                    <InputComponent v-model="add.ho_va_ten" id="ho_va_ten" label="Họ Và Tên" type="text" placeholder="Nhập vào họ và tên"></InputComponent>
                    <CheckBoxComponent v-model="add.check" id="check-box-1" label="Danh Mục"></CheckBoxComponent>
                    <CheckBoxComponent id="check-box-2" label="Danh Mục 1"></CheckBoxComponent>
                    <CheckBoxComponent id="check-box-3" label="Danh Mục 2"></CheckBoxComponent>
                    <CheckBoxComponent id="check-box-4" label="Danh Mục 3"></CheckBoxComponent>
                    <RadioComponent id="radio-1" v-model="add.check1" label="Radio 1"></RadioComponent>
                    <RadioComponent id="radio-2" label="Radio 2"></RadioComponent>
                    <RadioComponent id="radio-3" label="Radio 3"></RadioComponent>
                    <SelectComponent v-model="add.tinh_trang" label="Tình Trạng" :options="options"></SelectComponent>
                </div>
                <div class="card-footer">
                    <button class="btn btn-primary float-end" @click="ThemMoi()">Thêm Mới</button>
                </div>
            </div>
        </div>
        <div class="col-xl-9 col-lg-9 col-md-9 col-sm-12">
            <div class="card">
                <div class="card-header">
                    Danh Sách Tài Khoản
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <th class="text-center align-middle text-nowrap">#</th>
                                    <th class="text-center align-middle text-nowrap">#</th>
                                    <th class="text-center align-middle text-nowrap">#</th>
                                    <th class="text-center align-middle text-nowrap">#</th>
                                    <th class="text-center align-middle text-nowrap">#</th>
                                </tr>
                            </thead>
                            <tbody>

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-3">
            <CardComponent :required="1" newClass="text-end">
                <template #card-header>
                    <span>Thêm Mới Danh Mục</span>
                </template>
                <template #card-body>
                    <InputComponent v-model="add.ho_va_ten" id="ho_va_ten" label="Họ Và Tên" type="text" placeholder="Nhập vào họ và tên"></InputComponent>
                    <CheckBoxComponent v-model="add.check" id="check-box-1" label="Danh Mục"></CheckBoxComponent>
                    <CheckBoxComponent id="check-box-2" label="Danh Mục 1"></CheckBoxComponent>
                    <CheckBoxComponent id="check-box-3" label="Danh Mục 2"></CheckBoxComponent>
                    <CheckBoxComponent id="check-box-4" label="Danh Mục 3"></CheckBoxComponent>
                    <RadioComponent id="radio-1" v-model="add.check1" label="Radio 1"></RadioComponent>
                    <RadioComponent id="radio-2" label="Radio 2"></RadioComponent>
                    <RadioComponent id="radio-3" label="Radio 3"></RadioComponent>
                    <SelectComponent v-model="add.tinh_trang" label="Tình Trạng" :options="options"></SelectComponent>
                </template>
                <template #card-footer>
                    <ModalComponent titleId="test_123" label="Thêm Mới"></ModalComponent>
                </template>
            </CardComponent>
        </div>
        <div class="col-9">
            <CardComponent :required="0">
                <template #card-header>
                    Danh Sách Danh Mục
                </template>
                <template #card-body>
                    <TableComponent>
                        <template #thead>
                            <tr>
                                <th class="text-center align-middle text-nowrap">#</th>
                                <th class="text-center align-middle text-nowrap">#</th>
                                <th class="text-center align-middle text-nowrap">#</th>
                                <th class="text-center align-middle text-nowrap">#</th>
                                <th class="text-center align-middle text-nowrap">#</th>
                            </tr>
                        </template>
                        <template #tbody>
                            <tr>
                                <th class="text-center align-middle text-nowrap">1</th>
                                <td class="text-center align-middle text-nowrap">2</td>
                                <td class="text-center align-middle text-nowrap">3</td>
                                <td class="text-center align-middle text-nowrap">4</td>
                                <td class="text-center align-middle text-nowrap">5</td>
                            </tr>
                        </template>
                    </TableComponent>
                </template>
            </CardComponent>
        </div>
    </div>
    <div class="row">
        <div class="col-12">
            <div class="card">
                <div class="card-body">
                    <BarChartComponent :chartData="dataChart"></BarChartComponent>
                </div>
            </div>
        </div>
        <div class="col-12">
            <PieChartComponent :chartData="dataChartPie" :titleChart="titleChart"></PieChartComponent>
        </div>
    </div>
    <div class="row">
        <div class="card">
            <div class="card-body">
                <CalendarComponent/>
            </div>
        </div>
    </div>
</template>

<script>
import CheckBoxComponent from '@/components/CheckBoxComponent.vue';
import InputComponent from '@/components/InputComponent.vue';
import RadioComponent from '@/components/RadioComponent.vue';
import SelectComponent from '@/components/SelectComponent.vue';
import CardComponent from '@/components/CardComponent.vue';
import ModalComponent from '@/components/ModalComponent.vue';
import TableComponent from '@/components/TableComponent.vue';
import BarChartComponent from '@/components/BarChartComponent.vue';
import PieChartComponent from '@/components/PieChartComponent.vue';
import CalendarComponent from '@/components/CalendarComponent.vue';
import { ref } from 'vue';
export default {
    name: 'quan-ly-admin',
    components: {
        InputComponent,
        CheckBoxComponent,
        RadioComponent,
        SelectComponent,
        CardComponent,
        ModalComponent,
        TableComponent,
        BarChartComponent,
        PieChartComponent,
        CalendarComponent
    },
    setup() {
        const add = ref({});
        const titleChart = "Pie Chart";
        const dataChartPie = ref({
            labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
            datasets: [{
                // label: "Population (millions)",
                backgroundColor: ["#0d6efd", "#212529", "#17a00e", "#f41127", "#ffc107"],
                data: [2478, 5267, 734, 784, 433],
            }]
        });

        const dataChart = ref({
            labels: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
            datasets: [
                {
                    data: [1,2,3,4,5,6,9],
                    label: 'Google',
                    barPercentage: .5,
                    backgroundColor: "#0d6efd"
                }, 
                // {
                //     label: 'Facebook',
                //     data: [1,2,3,4,5,6,9],
                //     barPercentage: .5,
                //     backgroundColor: "#f41127"
                // }
            ],
            backgroundColor : [],
            borderColor : [],
            borderWidth: 1,
        })

        const options = ref([
            { text: 'One', value: '1' },
            { text: 'Two', value: '2' },
            { text: 'Three', value: '3' },
        ]);

        function ThemMoi() {
            console.log(add.value);
        }
        return { add, options, dataChart, titleChart, dataChartPie, ThemMoi }
    }
}
</script>
<style scoped>
</style>
