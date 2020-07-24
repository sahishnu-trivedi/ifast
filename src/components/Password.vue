<template>
	<div class="right-column">
		<div class="box">
			<h1 class="box-title"><strong> Change Password </strong></h1>
			<p class="box-subtitle">Check out each collumn for more details</p>
			<div>
				<form id="setPassword">
					<div class="form-block">
						<label for="new-password">New Password</label>
						<input
                            class="password-input"
							:class="{ valid: passwordValidation.valid }"
							:type="passwordVisible ? 'text' : 'password'"
							v-model="password"
						/>
                    
					</div>
					<div class="form-block">
						<label for="repeat-password">Repeat Password</label>
						<input class="password-input"  :class="(password==checkPassword) ?'valid': ''"  type="password" v-model.lazy="checkPassword" />
					</div>
					
					<button
                        class="btn-submit"
						@click="resetPasswords"
						:disabled="passwordsFilled && !notSamePasswords && passwordValidation.valid"
					>
						Submit
					</button>

                    <transition name="hint" appear>
						<div
							v-if="passwordValidation.errors.length > 0 && !submitted"
							class="hints"
						>
							<h2>Hints</h2>
							<p v-for="(error, index) in passwordValidation.errors" :key="index">
								{{ error }}
							</p>
						</div>
					</transition>

					<div class="matches" v-if="notSamePasswords">
						<p>Passwords don't match.</p>
					</div>


				</form>

			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "Password",
	data() {
		return {
			rules: [
				{ message: "One lowercase letter required.", regex: /[a-z]+/ },
				{ message: "One uppercase letter required.", regex: /[A-Z]+/ },
				{ message: "6 characters minimum.", regex: /.{6,}/ },
				{ message: "One number required.", regex: /[0-9]+/ }
			],
			password: "",
			checkPassword: "",
			passwordVisible: false,
			submitted: false
		};
	},
	methods: {
		resetPasswords() {
			this.password = "";
			this.checkPassword = "";
			this.submitted = true;
			setTimeout(() => {
				this.submitted = false;
			}, 2000);
		},
		togglePasswordVisibility() {
			this.passwordVisible = !this.passwordVisible;
		}
	},
	computed: {
		notSamePasswords() {
			if (this.passwordsFilled) {
				return this.password !== this.checkPassword;
			} else {
				return false;
			}
		},
		passwordsFilled() {
			return this.password !== "" && this.checkPassword !== "";
		},
		passwordValidation() {
			let errors = [];
			for (let condition of this.rules) {
				if (!condition.regex.test(this.password)) {
					errors.push(condition.message);
				}
			}
			if (errors.length === 0) {
				return { valid: true, errors };
			} else {
				return { valid: false, errors };
			}
		}
	}
};
</script>

<style lang="scss" scoped>
form {margin-top: 45px;
	.form-block {margin-bottom: 30px;}
	.password-input {width: 100%; background: var(--bg-color); border-radius: 10px; margin-top: 10px; font-size: 16px; padding: 18px 15px;
        &.valid{border:solid 1px green} 
    }
	.btn-submit {width: 100%; background: var(--primary-color); color: #fff; border-radius: 10px; padding: 15px 0; font-size: 18px; margin-bottom: 15px;}
	.password-status {color: var(--secondary-color); display: inline-block; margin-top: 25px;}
}
</style>
