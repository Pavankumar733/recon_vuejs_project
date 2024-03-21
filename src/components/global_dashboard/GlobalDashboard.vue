<template>


    <section class="main-sec">
        <section class="sec-carousel">
            <div class="container-fluid con-corousel">
                <div class="container pt-2">
                    <h5 class="m-0 rec-text mb-3">Reconcilation</h5>
                </div>

                <div class=" mb-4 active h-100">
                    <div class="cards">
                        <div class="container carouselContainer p-0" ref="carouselContainer">
                            <div class="d-flex gap-4">

                                <div class="">
                                    <div class="card h-100" @click="navigatewr()">
                                        <div class="card-body">
                                            <img class="mb-4" src="../../assets/images/yellow.svg" alt="" />
                                            <div class="text-div mb-5">
                                                <small class="m-0 mb-3 text-black-50 fw-medium">OFB(Wash) vs
                                                    J104</small>
                                                <h6 class="fw-bold mt-3">
                                                    MBV earned points Reconciliation
                                                </h6>
                                            </div>
                                        </div>
                                        <div class="card-footer">
                                            <button class="btn view-btn">
                                                View <i class="ri-arrow-right-s-line"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div class="">
                                    <div class="card h-100" @click="navigatear_con('DandB')">
                                        <div class="card-body">
                                            <img class="mb-4" src="../../assets/images/green.svg" alt="" />
                                            <div class="text-div mb-5">
                                                <small class="m-0 mb-3 text-black-50 fw-medium">L112 vs
                                                    L124</small>
                                                <h6 class="fw-bold mt-3">AR Reconciliation</h6>
                                            </div>
                                        </div>
                                        <div class="card-footer">
                                            <button class="btn view-btn">
                                                View <i class="ri-arrow-right-s-line"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div class="">
                                    <div class="card h-100">
                                        <div class="card-body">
                                            <img class="mb-4" src="../../assets/images/blue.svg" alt="" />
                                            <div class="text-div">
                                                <small class="m-0 mb-3 text-black-50 fw-medium">Redemption Stay
                                                    reimbursable vs City Ledger
                                                </small>
                                                <h6 class="fw-bold mt-1 mb-0">
                                                    Marriott Bonvoy Redemption Reimbursement & Occupancy
                                                    Premium
                                                </h6>
                                            </div>
                                        </div>
                                        <div class="card-footer">
                                            <button class="btn view-btn">
                                                View <i class="ri-arrow-right-s-line"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div class="">
                                    <div class="card h-100">
                                        <div class="card-body">
                                            <img class="mb-4" src="../../assets/images/red.svg" alt="" />
                                            <div class="text-div">
                                                <small class="m-0 mb-3 text-black-50 fw-medium">OFB(Wash
                                                    Invoice) vs
                                                    Marriott Bonvoy Property
                                                    eBonus</small>
                                                <h6 class="fw-bold mt-3">
                                                    Bonus Points Reconciliation
                                                </h6>
                                            </div>
                                        </div>
                                        <div class="card-footer">
                                            <button class="btn view-btn">
                                                View <i class="ri-arrow-right-s-line"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>




                                <div class="">
                                    <div class="card h-100">
                                        <div class="card-body pb-0">
                                            <img class="mb-4" src="../../assets/images/thickgreen.svg" alt="" />
                                            <div class="text-div">
                                                <small class="m-0 mb-3 text-black-50 fw-medium">Property
                                                    Enrollment
                                                    Report vs J104</small>
                                                <h6 class="fw-bold mt-2">Bonvoy Enrollment</h6>
                                            </div>
                                        </div>
                                        <div class="card-footer">
                                            <button class="btn view-btn">
                                                View <i class="ri-arrow-right-s-line"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div class="">
                                    <div class="card h-100">
                                        <div class="card-body">
                                            <img class="mb-4" src="../../assets/images/yellowgreen.svg" alt="" />
                                            <div class="text-div mb-5">
                                                <small class="m-0 mb-3 text-black-50 fw-medium">MBV 1 vs
                                                    ..</small>
                                                <h6 class="fw-bold mt-3">MBV Top50 report</h6>
                                            </div>
                                        </div>
                                        <div class="card-footer">
                                            <button class="btn view-btn">
                                                View <i class="ri-arrow-right-s-line"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div class="">
                                    <div class="card h-100">
                                        <div class="card-body">
                                            <img class="mb-4" src="../../assets/images/skyblue.svg" alt="" />
                                            <div class="text-div">
                                                <small class="m-0 mb-3 text-black-50 fw-medium">
                                                    OFB(Wash Invoice) vs Marriott Bonvoy Events - Group Points
                                                    Posted MONTH 1 2023</small>
                                                <h6 class="fw-bold mt-2">
                                                    MBV 3 & 12 Report Validation
                                                </h6>
                                            </div>
                                        </div>
                                        <div class="card-footer">
                                            <button class="btn view-btn">
                                                View <i class="ri-arrow-right-s-line"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div class="">
                                    <div class="card h-100">
                                        <div class="card-body">
                                            <img class="mb-4" src="../../assets/images/purple.svg" alt="" />
                                            <div class="text-div mb-3">
                                                <small class="m-0 mb-3 text-black-50 fw-medium">OFB(Wash
                                                    Invoice) 2
                                                    vs On Demand Report
                                                </small>
                                                <h6 class="fw-bold mt-3">
                                                    OTA Commission Reconciliation
                                                </h6>
                                            </div>
                                        </div>
                                        <div class="card-footer">
                                            <button class="btn view-btn">
                                                View <i class="ri-arrow-right-s-line"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div>
                    <!-- Previous button -->
                    <button class="carousel-control-prev left-btn" @click="scrollLeft">
                        <i class="ri-arrow-left-s-line left"></i>
                        <span class="visually-hidden">Previous</span>
                    </button>

                    <!-- Next button -->
                    <button class="carousel-control-next left" @click="scrollRight">
                        <i class="ri-arrow-right-s-line"></i>
                    </button>
                </div>
            </div>
        </section>

        <!-- Settings code -->

        <div class="container-fluid con-corousel-1">

            <div class="container">
                <div class="row ">
                    <h5 class="m-0   set-text pb-2 text-start mt-4">Settings</h5>
                    <div class="col-md-4 col-lg-4 col-sm-6 mt-2">
                        <div class="card user-card">
                            <div class="card-body m-0 p-0  d-flex  justify-content-between">
                                <div class="d-flex align-items-center gap-3 ms-3 user-management text-white">
                                    <i class="ri-user-line"></i> User management
                                </div>
                                <button class="btn arrow-btn"><i class="ri-arrow-right-s-line"></i></button>
                            </div>
                        </div>
                    </div>


                    <div class="col-md-4 col-lg-4 col-sm-6 mt-2">
                        <div class="card user-card">
                            <div class="card-body m-0 p-0  d-flex  justify-content-between">
                                <div class="d-flex align-items-center gap-3 ms-3 user-management text-white">
                                    <i class="ri-user-line"></i> WorkFlow Settings
                                </div>
                                <button class="btn arrow-btn"><i class="ri-arrow-right-s-line"></i></button>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-4 col-lg-4 col-sm-6 my-2 ">
                        <div class="card user-card">
                            <div class="card-body m-0 p-0  d-flex  justify-content-between">
                                <div class="d-flex align-items-center gap-3 ms-3 user-management text-white">
                                    <i class="ri-user-line"></i> WorkFlow Requests
                                </div>
                                <button class="btn arrow-btn"><i class="ri-arrow-right-s-line"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </section>







</template>

<script>
export default {
    data() {
        return {
            show: false
        };
    },
    methods: {
        showHideArrow(side) {
            if (side == 'left') {
                this.show = false;
            }
            if (side == 'right') {
                this.show = 'true';
            }
        },
        navigatewr() {
            this.$router.push('/home/bonvoy_wash_invoice');
        },
        scrollLeft() {
            const container = this.$refs.carouselContainer;
            container.scrollLeft -= 300; // Adjust the scroll amount as needed
        },
        scrollRight() {
            const container = this.$refs.carouselContainer;
            container.scrollLeft += 300; // Adjust the scroll amount as needed
        }

    }



}

</script>

<style lang="scss" scoped>
.con-corousel {
    background-color: #181212;
    padding-bottom: 20px;
}

.rec-text {
    width: -moz-fit-content;
    width: fit-content;
    color: #fff;
    font-size: 18px;
    font-weight: 700;
    line-height: 28px;
}

.cards .card {
    border-radius: 10px;
    transition: all .3s !important
}

.cards .card:hover {
    cursor: pointer;
}

.cards .card-body {
    text-align: start;
}

.view-btn {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-weight: 700;
}

.set-text {

    font-size: 18px;
    font-weight: 700;

}

.user-card {
    height: 60px !important;
    transition: all 1s !important;
    justify-content: space-between !important;
    background-color: #fe5358;
    border: 1px solid transparent !important;
    border-radius: 14px !important;
    overflow: hidden;

}

.user-card:hover {
    background-color: #fff;
    color: #000;
    cursor: pointer;

}

.user-management {
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
}

.arrow-btn {
    font-size: 20px;
    color: #000 !important;
    background-color: #fff;

}

/* .arrow-btn:hover{
    background-color: #fe5358;
    color: #fff !important;
} */


.arrow-btn i {
    font-size: 24px;
}

.user-card:hover {
    transition: all 1s !important;

    background-color: white !important;
    border: 1px solid #c0c0c0 !important;

    .user-management {
        i {
            color: #fe5358;
        }

        color: black !important;
        font-size: 16px;
        font-style: normal;
        font-weight: 700;
    }

    button {
        border-radius: 0px !important;
        height: 100%;
        background: #fe5358;
        color: white !important;
        width: 60px;

        i {
            font-size: 24px;
        }
    }
}

.carousel-control-prev,
.carousel-control-next {
    position: absolute !important;
    top: 50%;
    transform: translateY(-50%);
    z-index: 1000;
    background: white;
    width: 35px;
    height: 35px;
    border-radius: 25px;
    border: none;
    cursor: pointer;
    color: black !important;

}
.sec-carousel{
    position: relative;
}

.carousel-control-prev {
    left: 10px;
}

.carousel-control-next {
    right: 10px;
}



.carouselContainer {
    width: 100%;
    overflow-x: scroll;
    scroll-behavior: smooth;
    -ms-overflow-style: none;
    /* IE and Edge */
    scrollbar-width: none;
    

    /* Firefox */
    .card {
        // max-width: 245px;
        width: 240px // display: inline-block;
            //   vertical-align: top;
    }
}
@media (max-width: 768px) {
  .carouselContainer {
    width: 75%; /* Adjust the width as needed */
    margin: 0 auto; /* Center the container horizontally */
  }
}

.carouselContainer::-webkit-scrollbar {
    display: none;
}
</style>