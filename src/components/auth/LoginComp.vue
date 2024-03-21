

<template>
    <section class="bg-dark_login">
        <div class="container h-100">
            <div class="row h-100">
                <div class="col-md-7 col-sm-12 col-lg-7">
                    <div class="left d-flex gap-4 h-100 flex-column align-items-baseline justify-content-center">
                        <div class="text-start mt-4">
                            <img src="../../assets/images/reconLogo.7484ceeb.svg" alt="">
                        </div>
                        <div class="text-start">
                            <h2 class="main_text"> Your Trusted Reconciliations <br> Companion</h2>
                        </div>
                    </div>


                </div>
                <div class="col-md-5 col-sm-12 col-lg-5 d-flex justify-content-center align-items-center">
                    <div class="card p-2 mb-4 w-100">
                        <div class="card-body">
                            <div class="row mb-3">
                                <div class="col-12 text-start ">
                                    <h3 class="lable1">Welcome to Ezy Recon</h3>
                                    <p class="text-muted">Sign in using your valid credentials</p>
                                </div>

                            </div>
                            <form @submit.prevent="onSubmit">
                                <div class="form-group has-float-label position-relative icon-field">
                                    <span class="icon-wrapper"><i class="ri-mail-fill"></i></span>
                                    <input type="email" id="email" class="form-control" autocomplete="off"
                                        placeholder="Email id" v-model="email" />


                                </div>
                                <div class="form-group has-float-label position-relative icon-field mt-3">
                                    <span class="icon-wrapper"> <i class="ri-lock-fill"></i></span>
                                    <input type="password" id="password" class="form-control" autocomplete="off"
                                        placeholder="Password" v-model="password" />


                                </div>
                                <div class="d-grid mt-5 ">
                                    <button class="btn btn-primary submitBtn d-flex" type="submit"
                                        :disabled="isFormEmpty">
                                        Sign In
                                        <i class="text-white mb-0 ri-arrow-right-line"></i>
                                    </button>

                                </div>
                            </form>

                        </div>
                    </div>

                </div>

            </div>

        </div>


    </section>
</template>
<script>
import axios from 'axios';
import Apiurls from '../shared/api_urls/api-urls'
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css'
import '../../style/style.scss'



export default {
    mounted() { },
    data() {
        return {
            email: '',
            password: '',
        };

    },
    computed: {
        isFormEmpty() {
            return !this.email.trim() || !this.password.trim();
        }
    },
    methods: {

        onSubmit() {
            if (this.email && this.password) {
                const data = {
                    usr: this.email,
                    pwd: this.password
                };
                axios.get(Apiurls.login, { params: data })
                    .then(res => {
                        if (res?.data && res?.data?.message === 'Logged In') {
                            localStorage.setItem('user', JSON.stringify(res?.data));
                            console.log(localStorage.getItem('user'))
                            toast.success("Login successful")
                            setTimeout(() => {
                                this.$router.push('/home/dashboard')

                            }, 100)
                            // Redirect or perform further actions upon successful login
                        } else {
                            console.error('Login failed:', res.data.message);
                            // Handle error message
                            toast.error(res?.data?.message)

                            // this.$toast.success(res?.data?.message)
                        }
                    })
                    .catch(error => {
                        console.error('Login request failed:', error);
                        toast.error(error?.message)

                        // Handle login request error
                    });
            } else {
                console.error('Email and password are required');
                // Handle empty email or password
            }
        }


        // showPassword() {
        //     // Your implementation for showing password
        // },
        // getUserCompanyData(email) {
        //     axios.get(backendUrl.user_permisions, {
        //         params: {
        //             filters: JSON.stringify([['user', '=', email]]),
        //             fields: JSON.stringify(['*']),
        //             limit_page_length: 'none',
        //         },
        //     })
        //         .then(response => {
        //             if (response.data.length) {
        //                 this.getUserDetails(response.data);
        //             } else {
        //                 this.$toastr.error("No Company is assigned");
        //             }
        //         })
        //         .catch(error => {
        //             console.error('Failed to fetch user permissions:', error);
        //             // Handle error
        //         });
        // },
        // getUserDetails(companyData) {
        //     const userCompanyList = companyData;
        //     axios.get(`${backendUrl.users}/${userCompanyList[0]?.user}`, {
        //         params: {
        //             fields: JSON.stringify(['*']),
        //         },
        //     })
        //         .then(response => {
        //             if (response.data) {
        //                 localStorage.setItem('UserDetails', JSON.stringify(response.data));
        //                 const role = response.data.roles.filter(res => res.role !== 'EzyGST' && res.role !== 'Ezy-GST')[0].role;
        //                 localStorage.setItem('USERROLE', JSON.stringify(role));
        //                 localStorage.setItem('USERCOMPANY', JSON.stringify(companyData));
        //                 setTimeout(() => {
        //                     this.$router.push('home/dashboard');
        //                 }, 100);
        //             }
        //         })
        //         .catch(error => {
        //             console.error('Failed to fetch user details:', error);
        //             // Handle error
        //         });
        // }
    }
};
</script>




<style lang="scss">
.bg-dark_login {
    background-color: #1B222B;
    height: 100vh !important;
}

.main_text {
    font-weight: var(--fw-600);
    color: var(--white);
    font-size: 35px;
}

.h-100 {
    height: 100% !important;
}

.submitBtn {
    display: flex;
    justify-content: space-between !important;
    width: 100% !important;
}

.icon-field {
    .form-control {
        padding: 0.375rem 1.100rem 0.375rem 2.2rem;
    }
}

.lable1 {

    color: var(--blue) !important;
    font-weight: var(--fw-700) !important;
    font-size: var(--fs-seventeen) !important;
    line-height: 23px;
    margin-bottom: 5px;
    width: 100%;

}



.icon-wrapper {
    position: absolute;
    left: 10px;
    /* Adjust the left positioning as needed */
    top: 50%;
    /* Center the icon vertically */
    transform: translateY(-50%);
    font-size: var(--fs-seventeen);
    opacity: 0.8;
}

.routerlink-login {

    text-decoration: none !important;
}
</style>