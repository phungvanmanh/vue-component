<template>
    <div class="mb-2">
        <div class="form-check">
            <input 
                class="form-check-input" 
                type="checkbox" 
                :id="id"
                :checked="modelValue"
                :value = "value"
                @input="$emit('update:modelValue', $event.target.checked)"
            />
            <label class="form-check-label" :for="id">
                {{ label }}
            </label>
        </div>
    </div>
</template>

<script>
export default {
    name: "check-box-component",
    props: {
        id: {
            type: String,
            required: true,
        },
        label: {
            type: String,
            default: "",
        },
        value : {
            type : String,
            default : ""
        },
        modelValue: {
            type: Boolean,
            default: false,
        },
    },
}
</script>
