<template>
    <table class="ui-table">
        <thead>
            <tr>
                <th :class="textAlign" v-for="(column, index) in columns" :key="'th-' + index">{{column.label}}</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(row, index) in rows" :key="'tr-' + index">
                <td :class="textAlign" v-for="(column, key) in columns" :key="'td-' + index + '-' + column.name">
                    {{ 
                        column.format != undefined 
                            ? column.format(row[column.name])
                            : row[column.name]
                    }}
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script>
export default {
    name: 'ui-table',
    props: {
        columns: {
            type: Array,
            default: ()=> []
        },
        rows: {
            type: Array,
            default: ()=> []
        },
        textAlign: {
            type: String,
            default: ''
        },
    },
    methods: {
        update() {
            console.log(this.rows);
        },
    },
}
</script>

<style lang="scss" scoped>
@import './styles/imports';
.ui-table {
    width: 100%;
    max-width: 100%;
    border-collapse: separate;
    border-spacing: 0;
    thead, tr, th, td{
        border-color: #0000001f;
        border-style: solid;
        border-width: 0;
    }
    thead th, tbody td{
        border-bottom-width: 1px;
    }
    thead tr, tbody td{
        height: 48px;
        border-color: #0000001f;
    }
    thead {
        th {
            white-space: nowrap;
            padding: 7px 16px;
            background-color: inherit;
            text-align: var(--table-th-text-align, left);
            font-weight: 500;
            user-select: none;
        }
    }
    tbody {
        tr {
            &:hover {
                td {
                    &:before { background: rgba(0,0,0,.03); }
                }
            }
        }
        td{
            position: relative;
            font-size: var(--table-td-font-size, 13px);
            text-align: var(--table-td-text-align, left);
            white-space: nowrap;
            padding: 7px 16px;
            background-color: inherit;
            &:before { 
                content: "";
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                pointer-events: none;
            }
        }
    }
}
</style>