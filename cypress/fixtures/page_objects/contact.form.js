class contactForm {
  get firstNameInp() {
    return cy
      .get(".elementor-widget-wrap.elementor-element-populated")
      .find('[name="firstname"]');
  }
  get lastNameInp() {
    return cy
      .get(".elementor-widget-wrap.elementor-element-populated")
      .find('[name="lastname"]');
  }
  get emailInp() {
    return cy
      .get(".elementor-widget-wrap.elementor-element-populated")
      .find('[name="email"]');
  }
  get phoneInp() {
    return cy
      .get(".elementor-widget-wrap.elementor-element-populated")
      .find('[type="tel"]');
  }
  get companyInp() {
    return cy
      .get(".elementor-widget-wrap.elementor-element-populated")
      .find('[name="company"]');
  }
  get commentInp() {
    return cy
      .get(".elementor-widget-wrap.elementor-element-populated")
      .find('[name="message"]');
  }
  get submitBtn() {
    return cy
      .get(".elementor-widget-wrap.elementor-element-populated")
      .find('[type="submit"]');
  }
}
export default new contactForm();
