export default {
    data() {
        return {
            _mounted: false,
            _created: false
        }
    },
    mounted() {
        this._mounted = true
    },
    unmounted() {
        this._mounted = false
    },
    created() {
        this._created = true
    }
}