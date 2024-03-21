<template>
    <header>

        <div class="bg-dark  px-3">
            <div class="row  ">
                <div class="col-md-12 col-sm-12 d-flex justifybetween gap-2">
                    <div class=" d-flex gap-2 align-items-center">
                        <img src="../../assets/images/reconLogo.7484ceeb.svg" alt="" class="logo_img "
                            @click="navigate_logo">

                        <div class="ms-2">
                            <select class="p-1 ps-2  select_company form-select">
                                <option value="Sai Chakara">Sai Chakara </option>
                                <option value="Jw">Jw</option>

                            </select>

                        </div>
                    </div>
                    <div class="dropdown    d-flex justify-content-end ">
                        <p class="bg-text m-0  " id="dropdownMenuButton1" data-bs-toggle="dropdown">
                            P
                        </p>
                        <ul class="dropdown-menu p-4" aria-labelledby="dropdownMenuButton1">

                            <li><a class="dropdown-item">Pavan Kumar</a></li>
                            <li><a class="dropdown-item">pavan.g@caratred.com</a></li>

                            <li><button class="dropdown-item btn btn-sm btn-outline-primary mt-3" @click=logOut()>Log Out</button></li>


                        </ul>
                    </div>
                </div>




            </div>

        </div>

    </header>
</template>

<style lang="scss" scoped>
.bg-dark {
    padding: 10px;
    height: auto;
}

// .logo_img {
//     width: 100px;
// }

.logo_img:hover {
    cursor: pointer;
}

.bg-text {
    background-color: #fe5358;
    border-radius: 100px;
    padding: 5px 10px;
    color: #FFF;
    font-weight: 600;
    font-size: 14px;
}

.bg-text:hover {
    cursor: pointer;
}

.justifybetween {
    justify-content: space-between;
    align-items: center;
    vertical-align: middle;
}

.select_company {
    min-width: 150px;
    width: 100%;
    font-weight: 600;
    border: none;
    padding: 4px 16px !important;

}

.select_company option:hover {
    background-color: #7c7a7a !important;
}

.select_company:focus {
    box-shadow: none;
}

.form-select {
    padding: 0pc 10px;
}

.btn-outline-primary {
    border: 1px solid #fe5358 !important;
    color: #fe5358;
    font-weight: 500;
    text-align: center;
}

.btn-outline-primary:hover {
    background-color: #fe5358;
    color: #FFF;
}

</style>
<script>
export default {
    methods: {
        navigate_logo() {
            this.$router.push('/home/dashboard')
        },
        logOut(){
            localStorage.clear();
            this.$router.push('/')
        }
    }
}

</script>