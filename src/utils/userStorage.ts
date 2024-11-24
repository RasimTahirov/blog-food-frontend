const userData = localStorage.getItem('user');
const userNameAndEmail = userData ? JSON.parse(userData) : null;

export const name = userNameAndEmail ? userNameAndEmail.user.name : null;
export const email = userNameAndEmail ? userNameAndEmail.user.email : null;
