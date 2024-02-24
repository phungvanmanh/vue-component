<template>
    <div class="card">
        <div class="card-header">
            <slot name="card-header"/>
        </div>
        <div class="card-body">
            <slot name="card-body"/>
        </div>
        <template v-if="required">
            <div :class="`card-footer ${newClass}`">
                <slot name="card-footer"/>
            </div>
        </template>
        <template v-else></template>
    </div>
</template>
<script>
export default {
    name : "card-component",
    props : {
        newClass : {
            type : String,
            default : ""
        },
        required : {
            type : [Boolean, Number, String],
            default : true
        }
    }
}
</script>