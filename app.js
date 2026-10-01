const icons = {
  mark: '<path d="M4 16.5 9.5 5l3 7 2-4 5.5 8.5"/><path d="M4 19h16"/>',
  arrow: '<path d="M5 12h14"/><path d="m13 6 6 6-6 6"/>',
  back: '<path d="m15 18-6-6 6-6"/><path d="M9 12h11"/>',
  people: '<path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="10" cy="7" r="4"/><path d="M20 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>',
  finance: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 10h18M7 15h3"/>',
  inventory: '<path d="m12 3 9 5-9 5-9-5 9-5Z"/><path d="m3 12 9 5 9-5M3 16l9 5 9-5M12 13v8"/>',
  procurement: '<path d="M4 4h2l2.2 11h9.9l2-7H7"/><circle cx="10" cy="19" r="1"/><circle cx="17" cy="19" r="1"/>',
  sales: '<path d="M3 3v18h18"/><path d="m7 14 4-4 4 3 6-7"/><path d="M17 6h4v4"/>',
  report: '<path d="M4 19V5M4 19h17"/><rect x="7" y="11" width="3" height="5" rx="1"/><rect x="13" y="7" width="3" height="9" rx="1"/><rect x="19" y="9" width="2" height="7" rx="1"/>',
  lock: '<rect x="4" y="10" width="16" height="11" rx="2"/><path d="M8 10V7a4 4 0 1 1 8 0v3M12 14v3"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  layers: '<path d="m12 3 9 5-9 5-9-5 9-5Z"/><path d="m3 12 9 5 9-5M3 16l9 5 9-5"/>',
  check: '<path d="m5 12 4 4L19 6"/>',
  eye: '<path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z"/><circle cx="12" cy="12" r="3"/>',
  eyeOff: '<path d="m3 3 18 18M10.6 10.6a2 2 0 0 0 2.8 2.8"/><path d="M9.9 5.2A10.6 10.6 0 0 1 12 5c6.5 0 10 7 10 7a15 15 0 0 1-3 3.8M6.2 6.2C3.5 8 2 12 2 12s3.5 7 10 7a10 10 0 0 0 4-.8"/>',
  menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
  shield: '<path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z"/><path d="m9 12 2 2 4-4"/>',
  spark: '<path d="m12 3 1.9 5.8L20 11l-6.1 2.2L12 19l-1.9-5.8L4 11l6.1-2.2L12 3Z"/><path d="m19 14 1.1 2.9L23 18l-2.9 1.1L19 22l-1.1-2.9L15 18l2.9-1.1L19 14Z"/>',
  database: '<ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3"/>',
  target: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>',
  menu: '<path d="M4 7h16M4 12h16M4 17h16"/>'
};
const icon = (name, extra = '') => `<svg ${extra} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${icons[name] || icons.spark}</svg>`;
const app = document.querySelector('#app');
const isFile = location.protocol === 'file:';
const demoAccounts = [];

function currentRoute() {
  if (isFile && location.hash) return location.hash.slice(1) || '/';
  return location.pathname;
}
function navigate(path) {
  if (isFile) location.hash = path;
  else history.pushState({}, '', path);
  window.scrollTo(0, 0);
  render();
}
function brand() {
  return `<a class="brand" href="/" data-route="/" aria-label="Hope, Inc. ERP home"><span class="brand-mark">${icon('mark')}</span><span>Hope, Inc.<small>Enterprise resource planning</small></span></a>`;
}
function buttonLink(path, label, style = 'button-primary', trailing = false) {
  return `<a class="button ${style}" href="${path}" data-route="${path}">${label}${trailing ? icon('arrow') : ''}</a>`;
}
function landing() {
  const modules = [
    ['people', 'Human Resources', 'Keep employee records, attendance, and people operations in one organized place.'],
    ['finance', 'Finance & Accounting', 'Bring transactions, expenses, and financial reporting into clear view.'],
    ['inventory', 'Inventory Management', 'Understand stock levels, suppliers, and every inventory movement.'],
    ['procurement', 'Procurement', 'Coordinate purchase requests, approvals, suppliers, and orders.'],
    ['sales', 'Sales & Customers', 'Keep customer relationships and sales activity connected.'],
    ['report', 'Reports & Analytics', 'Turn day-to-day operations into timely, useful business insight.']
  ];
  const benefits = [
    ['database', 'Centralized information', 'One dependable place for the information teams rely on.'],
    ['spark', 'Improved productivity', 'Reduce repetitive admin and keep routine work moving.'],
    ['clock', 'Real-time data', 'See operational updates as they happen, not after the fact.'],
    ['shield', 'Secure access', 'Build access around the right people and responsibilities.'],
    ['target', 'Better decisions', 'Bring current, useful context to everyday decisions.'],
    ['layers', 'Connected processes', 'Keep departments in sync across shared workflows.']
  ];
  return `<header class="site-header"><div class="header-inner">${brand()}<nav class="nav-links" id="main-nav" aria-label="Main navigation"><a href="#home">Home</a><a href="#about">About</a><a href="#features">Features</a><a href="#contact">Contact</a></nav><div class="nav-actions">${buttonLink('/login', 'Log in', 'button-quiet')}${buttonLink('/register', 'Get started', 'button-primary')}</div><button class="menu-toggle" type="button" aria-label="Open navigation menu" aria-expanded="false" aria-controls="main-nav">${icon('menu')}</button></div></header>
  <main><section class="hero" id="home"><div class="hero-inner"><div class="hero-text"><span class="eyebrow">A clearer way to work</span><h1>Empowering Hope, Inc. through <em>smarter business</em></h1><p class="hero-copy">A connected ERP platform to help Hope, Inc. bring people, operations, and resources into better balance.</p><div class="hero-actions">${buttonLink('/login', 'Login to ERP', 'button-primary', true)}${buttonLink('/register', 'Create an account', 'button-outline')}</div><div class="hero-note">${icon('shield')} Thoughtful tools for the whole organization</div></div>
  <div class="dashboard-art" role="img" aria-label="Illustration of an ERP dashboard with business performance charts"><div class="dash-window"><div class="dash-top"><span class="dash-title">Business overview</span><span class="dash-period">This quarter&nbsp;⌄</span></div><div class="dash-label">Operating activity</div><div class="dash-total">$248,560 <span class="dash-change">↑ 12.8%</span></div><div class="chart">${[33,48,41,62,50,73,57,86,66,77,94,71].map(height => `<div class="chart-col"><i class="chart-bar" style="height:${height}%"></i></div>`).join('')}</div><div class="chart-caption"><span>JAN</span><span>FEB</span><span>MAR</span><span>APR</span><span>MAY</span><span>JUN</span></div><div class="dash-bottom"><div class="dash-metric"><div class="metric-heading"><span>People</span>${icon('people')}</div><div class="metric-number">128</div><div class="mini-bars">${[8,13,18,11,21,16,24].map(height => `<i style="height:${height}px"></i>`).join('')}</div></div><div class="dash-metric"><div class="metric-heading"><span>Stock health</span>${icon('inventory')}</div><div class="metric-number">94.2%</div><div class="mini-bars">${[11,17,14,22,18,24,20].map(height => `<i style="height:${height}px"></i>`).join('')}</div></div></div></div><div class="dash-float"><span class="float-icon">${icon('check')}</span><span class="float-copy"><strong>Everything in sync</strong>Updated just now</span></div></div></div></section>
  <div class="trust-strip"><div class="trust-inner"><span class="trust-label">One connected workplace</span><div class="trust-items"><span>${icon('people')} People</span><span>${icon('finance')} Finance</span><span>${icon('inventory')} Operations</span><span>${icon('report')} Insight</span></div></div></div>
  <section class="section section-white" id="features"><div class="section-inner"><div class="section-heading center"><span class="eyebrow">One system, every team</span><h2>Everything you need in one ERP platform</h2><p>Bring essential business functions together with tools designed to make daily work feel more connected.</p></div><div class="feature-grid">${modules.map(([symbol, title, description]) => `<article class="feature-card"><span class="feature-icon">${icon(symbol)}</span><h3>${title}</h3><p>${description}</p></article>`).join('')}</div></div></section>
  <section class="about-section" id="about"><div class="section-inner about-layout"><div><span class="eyebrow">Built around Hope, Inc.</span><h2>Better operations begin with a clearer picture.</h2></div><div class="about-copy"><p>Hope, Inc. is committed to providing efficient and organized business operations through modern technology and integrated management solutions.</p><p>Hope, Inc. ERP brings those moving parts together, giving every team a more thoughtful way to coordinate work, share information, and make progress.</p><span class="about-signature">Hope, Inc. team</span></div></div></section>
  <section class="section section-white"><div class="section-inner benefit-layout"><div class="benefit-intro"><span class="eyebrow">Made for work that matters</span><h2>A steadier foundation for better work.</h2><p>Less time looking for information. More confidence in the work ahead. Give every department a shared view of what matters.</p></div><div class="benefit-grid">${benefits.map(([symbol, title, description]) => `<article class="benefit-item"><span class="feature-icon">${icon(symbol)}</span><div><h3>${title}</h3><p>${description}</p></div></article>`).join('')}</div></div></section>
  <section class="cta-band" id="contact"><div class="section-inner cta-inner"><div><h2>Bring your work into better balance.</h2><p>Start with a connected view of Hope, Inc.</p></div>${buttonLink('/register', 'Create your account', 'button-primary', true)}</div></section></main>
  <footer class="site-footer"><div class="footer-inner">${brand()}<span class="footer-copy">© ${new Date().getFullYear()} Hope, Inc. All rights reserved.</span><div class="footer-links"><a href="#about">About Hope, Inc.</a><a href="mailto:hello@hopeinc.example">Contact</a><a href="/login" data-route="/login">ERP login</a></div></div></footer>`;
}
function authFrame(content, heading, description) {
  return `<main class="auth-shell"><aside class="auth-aside">${brand()}<div class="aside-message"><span class="eyebrow">Hope, Inc. ERP</span><h1>Good work happens when everything works together.</h1><p>A more considered way to manage the details, teams, and decisions behind Hope, Inc.</p></div><div class="aside-bottom">© ${new Date().getFullYear()} Hope, Inc. · Enterprise resource planning</div></aside><section class="auth-main"><div class="auth-card"><a class="auth-back" href="/" data-route="/">${icon('back')} Back to Hope, Inc.</a><h2>${heading}</h2><p class="auth-subtitle">${description}</p>${content}</div></section></main>`;
}
function loginPage() {
  return authFrame(`<div class="auth-demo-note">Demo interface only. Login is not connected to a secure authentication service; do not enter a real password.</div><form id="login-form" novalidate><div class="form-grid"><div class="form-field full"><label for="login-id">Email or username</label><input id="login-id" name="identity" autocomplete="username" placeholder="you@hopeinc.com" required></div><div class="form-field full"><label for="login-password">Password</label><div class="input-wrap"><input id="login-password" name="password" type="password" autocomplete="current-password" placeholder="Enter your password" required><button class="password-toggle" type="button" data-toggle-password="login-password" aria-label="Show password">${icon('eye')}</button></div></div></div><div class="form-options"><label class="check-label"><input type="checkbox" name="remember"> Remember me</label><a class="text-link" href="/forgot-password" data-route="/forgot-password">Forgot password?</a></div><button class="button button-primary form-submit" type="submit">Login to ERP ${icon('arrow')}</button><p class="form-error" role="alert"></p><p class="auth-switch">Don't have an account? <a href="/register" data-route="/register">Create an account</a></p></form>`, 'Welcome back', 'Sign in to your Hope, Inc. ERP account.');
}
function registerPage() {
  return authFrame(`<form id="register-form" novalidate><div class="form-grid"><div class="form-field"><label for="first-name">First name</label><input id="first-name" name="firstName" autocomplete="given-name" required></div><div class="form-field"><label for="middle-name">Middle name</label><input id="middle-name" name="middleName" autocomplete="additional-name"></div><div class="form-field"><label for="last-name">Last name</label><input id="last-name" name="lastName" autocomplete="family-name" required></div><div class="form-field"><label for="register-email">Email address</label><input id="register-email" name="email" type="email" autocomplete="email" placeholder="you@hopeinc.com" required></div><div class="form-field"><label for="username">Username</label><input id="username" name="username" autocomplete="username" required></div><div class="form-field"><label for="contact">Contact number</label><input id="contact" name="contact" type="tel" autocomplete="tel" placeholder="+1 555 000 0000" required></div><div class="form-field"><label for="register-password">Password</label><div class="input-wrap"><input id="register-password" name="password" type="password" autocomplete="new-password" required><button class="password-toggle" type="button" data-toggle-password="register-password" aria-label="Show password">${icon('eye')}</button></div><div class="strength"><span class="strength-track"><span class="strength-fill" id="strength-fill"></span></span><span id="strength-label">Password strength</span></div></div><div class="form-field"><label for="confirm-password">Confirm password</label><div class="input-wrap"><input id="confirm-password" name="confirmPassword" type="password" autocomplete="new-password" required><button class="password-toggle" type="button" data-toggle-password="confirm-password" aria-label="Show password">${icon('eye')}</button></div></div><div class="form-field"><label for="department">Department</label><select id="department" name="department" required><option value="">Select department</option><option>Human Resources</option><option>Finance</option><option>Inventory</option><option>Procurement</option><option>Sales</option><option>Operations</option></select></div><div class="form-field"><label for="role">Role</label><select id="role" name="role" required><option value="">Select role</option><option>Employee</option><option>Manager</option><option>HR Administrator</option><option>Finance Administrator</option><option>Inventory Administrator</option><option>System Administrator</option></select></div><div class="form-field full"><p class="requirements">Use at least 8 characters, with uppercase and lowercase letters, a number, and a symbol.</p></div><div class="form-field full"><label class="check-label"><input type="checkbox" name="terms" required> I agree to the Terms and Conditions.</label></div></div><button class="button button-primary form-submit" style="margin-top:17px" type="submit">Create account ${icon('arrow')}</button><p class="form-error" role="alert"></p><p class="auth-switch">Already have an account? <a href="/login" data-route="/login">Proceed to login</a></p></form>`, 'Create your Hope, Inc. ERP account', 'A few details to get your workspace ready.');
}
function forgotPage() {
  return authFrame(`<form id="forgot-form" novalidate><div class="auth-demo-note">Password reset emails are not configured yet. This demo will show the next step without sending an email.</div><div class="form-field"><label for="forgot-email">Email address</label><input id="forgot-email" name="email" type="email" autocomplete="email" placeholder="you@hopeinc.com" required></div><button class="button button-primary form-submit" style="margin-top:18px" type="submit">Send reset link ${icon('arrow')}</button><p class="form-error" role="alert"></p></form><p class="auth-switch"><a href="/login" data-route="/login">Back to login</a></p>`, 'Forgot your password?', 'Enter your registered email address and we’ll help you reset your password.');
}
function resetPage() {
  return authFrame(`<form id="reset-form" novalidate><div class="auth-demo-note">This demo does not update an account. A secure reset token and backend endpoint are required.</div><div class="form-grid"><div class="form-field full"><label for="new-password">New password</label><div class="input-wrap"><input id="new-password" name="password" type="password" autocomplete="new-password" required><button class="password-toggle" type="button" data-toggle-password="new-password" aria-label="Show password">${icon('eye')}</button></div><div class="strength"><span class="strength-track"><span class="strength-fill" id="strength-fill"></span></span><span id="strength-label">Password strength</span></div><p class="requirements">At least 8 characters, uppercase and lowercase letters, a number, and a symbol.</p></div><div class="form-field full"><label for="new-password-confirm">Confirm new password</label><div class="input-wrap"><input id="new-password-confirm" name="confirmPassword" type="password" autocomplete="new-password" required><button class="password-toggle" type="button" data-toggle-password="new-password-confirm" aria-label="Show password">${icon('eye')}</button></div></div></div><button class="button button-primary form-submit" style="margin-top:18px" type="submit">Reset password ${icon('arrow')}</button><p class="form-error" role="alert"></p></form>`, 'Choose a new password', 'Set a new password for your Hope, Inc. ERP account.');
}
function successPage(title, description, action, path) {
  return authFrame(`<div class="success-panel"><span class="success-mark">${icon('check')}</span><h3>${title}</h3><p>${description}</p>${buttonLink(path, action, 'button-primary')}</div>`, 'You’re all set', '');
}
function dashboard() {
  const items = [['people', 'People', 'Employee records and attendance'], ['finance', 'Finance', 'Transactions and reporting'], ['inventory', 'Inventory', 'Stock levels and suppliers'], ['procurement', 'Procurement', 'Requests and purchase orders'], ['sales', 'Sales & customers', 'Customer and sales activity'], ['report', 'Reports & analytics', 'Business performance insights']];
  return `<main class="dashboard-page"><header class="dash-header"><div class="dash-header-inner">${brand()}<button class="button button-outline" type="button" id="logout">Log out</button></div></header><section class="dashboard-content"><span class="eyebrow">Hope, Inc. ERP</span><h1>Welcome to Hope, Inc. ERP</h1><p>Your connected workspace for the people and operations that move Hope, Inc. forward.</p><span class="dash-status">Workspace overview</span><div class="dash-placeholder-grid">${items.map(([symbol, title, description]) => `<article class="placeholder-module"><span class="feature-icon">${icon(symbol)}</span><h2>${title}</h2><p>${description}</p></article>`).join('')}</div></section></main>`;
}
function showError(form, message) {
  const element = form.querySelector('.form-error');
  element.textContent = message;
  element.classList.add('visible');
}
function passwordStrength(value) {
  const tests = [value.length >= 8, /[a-z]/.test(value) && /[A-Z]/.test(value), /\d/.test(value), /[^A-Za-z0-9]/.test(value)];
  const score = tests.filter(Boolean).length;
  const fill = document.querySelector('#strength-fill');
  const label = document.querySelector('#strength-label');
  if (!fill || !label) return score;
  fill.style.width = `${score * 25}%`;
  fill.style.background = score < 2 ? '#d77659' : score < 4 ? '#d5a64f' : '#6f9d63';
  label.textContent = ['', 'Weak', 'Fair', 'Good', 'Strong'][score];
  return score;
}
function bindPage() {
  document.querySelectorAll('[data-route]').forEach(link => link.addEventListener('click', event => {
    event.preventDefault();
    navigate(link.dataset.route);
  }));
  document.querySelectorAll('[data-toggle-password]').forEach(button => button.addEventListener('click', () => {
    const field = document.getElementById(button.dataset.togglePassword);
    const showing = field.type === 'text';
    field.type = showing ? 'password' : 'text';
    button.setAttribute('aria-label', showing ? 'Show password' : 'Hide password');
    button.innerHTML = icon(showing ? 'eye' : 'eyeOff');
  }));
  const menu = document.querySelector('.menu-toggle');
  if (menu) menu.addEventListener('click', () => {
    const nav = document.querySelector('#main-nav');
    const open = nav.classList.toggle('open');
    menu.setAttribute('aria-expanded', String(open));
    menu.setAttribute('aria-label', open ? 'Close navigation menu' : 'Open navigation menu');
  });
  const registerPassword = document.querySelector('#register-password, #new-password');
  if (registerPassword) registerPassword.addEventListener('input', () => passwordStrength(registerPassword.value));

  const login = document.querySelector('#login-form');
  if (login) login.addEventListener('submit', event => {
    event.preventDefault();
    const data = new FormData(login);
    const identity = String(data.get('identity') || '').trim();
    const password = String(data.get('password') || '');
    const emailLike = identity.includes('@') ? /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(identity) : /^[a-zA-Z0-9._-]{3,}$/.test(identity);
    if (!identity || !password) return showError(login, 'Enter your email or username and password.');
    if (!emailLike) return showError(login, 'Enter a valid email address or username.');
    // TODO: Replace the demo-only transition with server-side credential verification and a secure session.
    sessionStorage.setItem('hope-demo-user', identity.split('@')[0]);
    navigate('/dashboard');
  });

  const register = document.querySelector('#register-form');
  if (register) register.addEventListener('submit', event => {
    event.preventDefault();
    const data = new FormData(register);
    const email = String(data.get('email') || '').trim();
    const phone = String(data.get('contact') || '').replace(/[\s()+.-]/g, '');
    const password = String(data.get('password') || '');
    const score = passwordStrength(password);
    const required = ['firstName', 'lastName', 'email', 'username', 'contact', 'password', 'confirmPassword', 'department', 'role'];
    if (required.some(key => !String(data.get(key) || '').trim())) return showError(register, 'Complete all required fields.');
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return showError(register, 'Enter a valid email address.');
    if (!/^[a-zA-Z0-9._-]{3,30}$/.test(String(data.get('username')))) return showError(register, 'Username must be 3–30 characters and use only letters, numbers, dots, underscores, or hyphens.');
    if (phone.length < 7 || phone.length > 15 || !/^\d+$/.test(phone)) return showError(register, 'Enter a valid contact number.');
    if (score < 4) return showError(register, 'Choose a password that meets all four requirements.');
    if (password !== data.get('confirmPassword')) return showError(register, 'Your passwords do not match.');
    if (!data.get('terms')) return showError(register, 'Agree to the Terms and Conditions to continue.');
    if (demoAccounts.some(account => account.email.toLowerCase() === email.toLowerCase() || account.username.toLowerCase() === String(data.get('username')).toLowerCase())) return showError(register, 'An account with those details could not be created. Try another email or username.');
    // Keep only non-sensitive demo identity in memory; never retain submitted passwords.
    demoAccounts.push({ email, username: String(data.get('username')), name: String(data.get('firstName')) });
    navigate('/account-created');
  });

  const forgot = document.querySelector('#forgot-form');
  if (forgot) forgot.addEventListener('submit', event => {
    event.preventDefault();
    const email = String(new FormData(forgot).get('email') || '').trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return showError(forgot, 'Enter a valid email address.');
    navigate('/reset-password');
  });
  const reset = document.querySelector('#reset-form');
  if (reset) reset.addEventListener('submit', event => {
    event.preventDefault();
    const data = new FormData(reset);
    const password = String(data.get('password') || '');
    if (passwordStrength(password) < 4) return showError(reset, 'Choose a password that meets all four requirements.');
    if (password !== data.get('confirmPassword')) return showError(reset, 'Your passwords do not match.');
    navigate('/password-reset');
  });
  const logout = document.querySelector('#logout');
  if (logout) logout.addEventListener('click', () => {
    sessionStorage.removeItem('hope-demo-user');
    navigate('/login');
  });
}
function render() {
  const route = currentRoute().replace(/\/$/, '') || '/';
  if (route === '/dashboard' && !sessionStorage.getItem('hope-demo-user')) return navigate('/login');
  const pages = {
    '/': landing,
    '/login': loginPage,
    '/register': registerPage,
    '/forgot-password': forgotPage,
    '/reset-password': resetPage,
    '/account-created': () => successPage('Account created successfully!', 'Your demo profile is ready. Continue to login to open the Hope, Inc. ERP workspace.', 'Proceed to login', '/login'),
    '/password-reset': () => successPage('Your password has been successfully reset.', 'This confirmation is for the frontend demo only. No account password has been changed.', 'Return to login', '/login'),
    '/dashboard': dashboard
  };
  app.innerHTML = (pages[route] || landing)();
  bindPage();
  document.title = route === '/' ? 'Hope, Inc. ERP | Work, in better balance' : `${route.slice(1).replaceAll('-', ' ').replace(/\b\w/g, letter => letter.toUpperCase()) || 'Home'} | Hope, Inc. ERP`;
}
window.addEventListener('popstate', render);
window.addEventListener('hashchange', render);
render();
