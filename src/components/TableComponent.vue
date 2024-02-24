<template>
    <div class="table-responsive">
        <table class="table table-bordered">
            <thead>
                <slot name="thead" />
            </thead>
            <tbody>
                <slot name="tbody" />
            </tbody>
            <template v-if="required">
                <tfoot>
                    <slot name="tfoot" />
                </tfoot>
            </template>
            <template v-else></template>
        </table>
    </div>
</template>
<script>
export default {
    name : "table-component",
    props : {
        required : {
            type : [Boolean, String, Number],
            default : false
        }
    }
}
</script>