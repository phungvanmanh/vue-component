<template>
    <div class="mb-2">
        <label class="form-label">
            {{ label }}
        </label>
        <select class="form-select" aria-label=".form-select-sm example" v-model="selectedValue" @select="$emit('update:modelValue', event.target.value)">
            <option disabled value="">{{ defaultOption }}</option>
            <option v-for="option in options" :key="option.value" :value="option.value">
                {{ option.text }}
            </option>
        </select>
    </div>
</template>
  
<script>
export default {
    name: 'select-component',
    props: {
        label: {
            type: String,
            default: "",
        },
        modelValue: {
            type: [String, Number],
            default: '',
        },
        options: {
            type: Array,
            required: true,
        },
        defaultOption: {
            type: String,
            default: 'Mời bạn lựa chọn...',
        }
    },
    emits: ['update:modelValue'],
    computed: {
        selectedValue: {
            get() {
                return this.modelValue;
            },
            set(value) {
                this.$emit('update:modelValue', value);
            },
        },
    },
    // methods: {
    //     onChange(event) {
    //         this.$emit('update:modelValue', event.target.value);
    //     },
    // },
}
</script>
  