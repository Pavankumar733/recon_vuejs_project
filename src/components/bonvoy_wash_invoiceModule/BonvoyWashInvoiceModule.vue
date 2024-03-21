<template>
    <section>
        <div class=" sideNav pt-1">
            <div class="container-fluid">
     
                <div class="row    align-items-center">
                <div class="col-md-4 col-sm-6">
                    <div class="d-flex arrow-left">
                        <i class="ri-arrow-left-line  mx-3" @click="back"></i>
                        <!-- <i class="ri-arrow-left-s-line  mx-3" @click="back"></i> -->
                        <div class="side-title d-flex align-items-center">
                            OFB(Wash Invoice) Reconciliation
                        </div>

                    </div>
                </div>
                <div class="col-md-8 col-sm-12 ">
                    <div class=" scroll-tabs_header">
                        <!-- Previous button -->
                        <button class="btn btn-sm carousel-btns me-3" @click="scrollLeft">
                            <i class="ri-arrow-left-s-line left"></i>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <ul class="list-unstyled  custom-slider-main " ref="carouseltabs">
                            <li   @click="changeTabs('Dashboard')" :class="{ active: activeTab === 'Dashboard' }">
                                <span> Dashboard</span>
                            </li>
                            <router-link to="/home/bonvoy_wash_invoice/reconcilation">
                                <li  @click="changeTabs('Reconciliation')" :class="{ active: activeTab === 'Reconciliation' }">
                                <span> Reconciliation</span>
                            </li> 
                            </router-link>
                         

                            <li  @click="changeTabs('Supporting Documents')" :class="{ active: activeTab === 'Supporting Documents' }">
                                <span> Supporting Documents</span>
                            </li>
                            <li  @click="changeTabs('OFB(Wash Invoice)')" :class="{ active: activeTab === 'OFB(Wash Invoice)' }">
                                <span> OFB(Wash Invoice)</span>
                            </li>
                            <li  @click="changeTabs('J104')" :class="{ active: activeTab === 'J104' }">
                                <span> J104</span>
                            </li>
                            <li  @click="changeTabs('Unreconciled Transactions')" :class="{ active: activeTab === 'Unreconciled Transactions' }">
                                <span>Unreconciled Transactions</span>
                            </li>
                            <li  @click="changeTabs('Missing in J104 SetOff')" :class="{ active: activeTab === 'Missing in J104 SetOff' }">
                                <span>Missing in J104 SetOff </span>
                            </li>
                            <li>
                                <span>Unreconciled Transactions</span>
                            </li>
                            <li  @click="changeTabs('Missing in J104 SetOff')" :class="{ active: activeTab === 'Missing in J104 SetOff' }">
                                <span>Missing in J104 SetOff </span>
                            </li>
                            <li  @click="changeTabs('Unreconciled Transactions')" :class="{ active: activeTab === 'Unreconciled Transactions' }">
                                <span>Unreconciled Transactions</span>
                            </li>
                            <li  @click="changeTabs('Missing in J104 SetOff')" :class="{ active: activeTab === 'Missing in J104 SetOff' }">
                                <span>Missing in J104 SetOff </span>
                            </li>
                        </ul>

                        <!-- Next button -->
                        <button class="btn btn-sm carousel-btns ms-3" @click="scrollRight">
                            <i class="ri-arrow-right-s-line"></i>
                        </button>
                    </div>
                </div>

            </div>
            </div>
       








        </div>




        <router-view />
    </section>

</template>

<script>
export default {
    data() {
        return {
            activeTab:'Reconciliation'
        };
    },

    methods: {
        back() {
            this.$router.push('/home/dashboard')
        },
        scrollLeft() {
            const container = this.$refs.carouseltabs;
            container.scrollLeft -= 300; // Adjust the scroll amount as needed
        },
        scrollRight() {
            const container = this.$refs.carouseltabs;
            container.scrollLeft += 300; // Adjust the scroll amount as needed
        },
        changeTabs(tab){
            console.log(tab)
            this.activeTab=tab
        }

    }
}


</script>

<style lang="scss" scoped>
.sideNav {
    background-color: black;
    display: flex;
    align-items: center;
    position: relative;

    router-link{
text-decoration: none;
    }
}

.side-title {
    color: white;
    font-weight: 600;
    white-space: nowrap;

}

.arrow-left {
    border-right: 1px solid white;

i {
    font-size: 20px;
    font-weight: 600;
    color: black;
    background-color: white;
    border-radius: 50px;
    display: flex;
    align-items: center;
    padding: 0px 5px;
}
}

.arrow-left i:hover {

    cursor: pointer;
}

.list-unstyled {
    display: flex;
    margin: 0;
}

.list-unstyled li {
    padding: 10px;
    color: white;
}

.scroll-tabs_header {
  /* Ensure the container takes full height */
//   height: 100%;
  display: flex;
  align-items: center;
  
}

.carousel-btns{
    background-color: white !important;
font-weight: 600;
//   border-radius: 25px;
border-radius: 50px;
}

.carousel-control-prev {
  margin-right: 10px;
}

.carousel-control-next {
  margin-left: 10px;
}
.custom-slider-main{
    gap:4px;
    width: 100%;
    overflow: scroll;
    scroll-behavior: smooth;
    white-space: nowrap;
    a{
        text-decoration: none;
    }
}
.custom-slider-main::-webkit-scrollbar{
    display: none;
}
.custom-slider-main li.active{
    // background-color: red;
    border-bottom: 4px solid red;
    font-weight: 600;
}
@media (max-width: 768px) {
  .side-title {
    font-size: 14px;
  }
  .arrow-left{
    border-right: none;
  }
}
</style>
