<template>
    <div class="mb-2">
        <label class="form-label">{{ label }}</label>
        <input
            :id="id"
            :type="type"
            class="form-control"
            :name="name"
            :value="modelValue"
            :placeholder="placeholder"
            :disabled="disabled"
            :required="isRequired"
            :step="type === 'number' ? step : null"
            @input="$emit('update:modelValue', $event.target.value)" 
        />
    </div>
</template>
<script>
export default {
    name: "input-component",
    props : {
        label: {
            type: String,
            default: "",
        },
        id: {
            type: String,
            required: false,
        },
        type: {
            type: String,
            default: "text",
        },
        name: {
            type: String,
            default: "",
        },
        modelValue: {
            type: [String, Number],
            default: ''
        },
        placeholder: {
            type: String,
            default: "",
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        isRequired: {
            type: Boolean,
            default: false,
        },
        step : {
            type: [Number, String],
            default: 1
        },
    },
}
</script>