<template>
    <button :type="type" :style="style" :class="'me-2 btn btn-' + color" data-bs-toggle="modal" :data-bs-target="'#' + titleId"  @click="handleClick">
        {{ label }}
    </button>
    <Teleport to="body">
        <div class="modal fade" :id="titleId" tabindex="-1" aria-labelledby="exampleModalLabel"  aria-hidden="true">
            <div :class="'modal-dialog ' + sizeModal">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel"><slot name="modal-header"></slot></h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <slot name="modal-body"></slot>
                    </div>
                    <div class="modal-footer" v-if="required">
                        <slot name="modal-footer"></slot>
                    </div>
                </div>
            </div>
        </div>
    </Teleport>
</template>
<script>
export default {
    data() {
        return {
            showModal : false,
        };
    },
    props : {
        label : {
            type : String,
            default : '',
        },
        titleId : {
            type : String,
            required : true,
        },
        color : {
            type: String,
            default : 'primary',
            validator(value) {
                return ['primary', 'danger', 'success', 'secondary', 'warning', 'light', 'dark', 'radio', 'number'].includes(value)
            }
        },
        type : {
            type: String,
            default : 'button',
            validator(value) {
                return ['button', 'submit', 'submit', 'reset'].includes(value)
            }
        },
        sizeModal : {
            type: String,
            default : '',
            validator(value) {
                return ['', 'modal-fullscreen', 'modal-xl', 'modal-lg', 'modal-sm'].includes(value)
            }
        },
        required : {
            type : Boolean,
            default: true,
        },
        currentValue: {
            type: Object,
            default: () => ({})
        },
        style: Object
    },
    emits: ['click'],
    methods: {
        handleClick() {
            this.showModal = !this.showModal;
            this.$emit('click', this.currentValue);
        }
    }
}
</script>