import { Formik } from 'formik';


function Auth() {
    return (
        <Formik
            initialValues={{ phone: '', password: '' }}
            validate={values => {
                const errors = {};
                if (values.phone) {
                    errors.phone = 'Введите номер вашего телефона в формате 999-111-22-33';
                } else if (
                    !/\[+78]/i.test(values.phone)
                ) {
                    errors.phone = 'Некорректный номер телефона. Используйте, например, такой формат: 999-111-22-33';
                }
                if (values.password) {
                    errors.password = 'Введите пароль (не менее 4х знаков из латинских букв и цифр)'
                } else if (values.password.length < 4) {

                }
                return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                }, 400);
            }}
        >
            {({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  isSubmitting,
                  /* and other goodies */
              }) => (
                <form onSubmit={handleSubmit}>
                    <input
                        type="phone"
                        name="phone"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                    />
                    {errors.email && touched.email && errors.email}
                    <input
                        type="password"
                        name="password"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password}
                    />
                    {errors.password && touched.password && errors.password}
                    <button type="submit" disabled={isSubmitting}>
                        Submit
                    </button>
                </form>
            )}
        </Formik>
    )
}
export default Auth;