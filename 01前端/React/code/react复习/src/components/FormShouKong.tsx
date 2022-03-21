import React, {ChangeEvent, useState} from 'react';

function FormShouKong () {
  let [form, setForm] = useState ({
    name: '',
    email: '',
    password: '',
  });

  function ChangeForm (e: ChangeEvent<HTMLInputElement>) {
    setForm ({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <div>
      <h1>受控表单</h1>
      <label htmlFor="name">姓名</label>
      <input type="text" id="name" value={form.name} name="name" onChange={ChangeForm}/>
      <br/>
      <label htmlFor="email">邮箱</label>
      <input type="text" id="email" value={form.email} name="email" onChange={ChangeForm}/>
      <br/>
      <label htmlFor="password">密码</label>
      <input type="text" id="password" value={form.password} name="password" onChange={ChangeForm}/>
    </div>
  );
}

export default FormShouKong;
