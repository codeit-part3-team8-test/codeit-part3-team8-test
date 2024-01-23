import classNames from 'classnames/bind';
import styles from './Home.module.scss';

import useCountStore from '@/stores/useCountStore';
import getSharedData from '@/apis/shared';
import { useState } from 'react';
import signin from '@/apis/signin';
import useAuthStore from '@/stores/useAuthStore';

const cx = classNames.bind(styles);

interface HomeProps {
  folders: any;
}

const Home: React.FC<HomeProps> = ({ folders }) => {
  const { count, increaseCount, decreaseCount, removeAllCount, text } = useCountStore();
  const { login, logout, user } = useAuthStore();

  const { links } = folders;
  const [value, setValue] = useState<{ email: string; password: string }>({
    email: '',
    password: '',
  });

  const handleChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValue((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await login(value.email, value.password);

    setValue({
      email: '',
      password: '',
    });
  };

  const handleLogout = () => {
    logout();
  };

  return (
    <main>
      <section className={cx('section', 'zustand')}>
        <h1 className={cx('title')}>zustand</h1>
        <div className={cx('container')}>
          <p className={cx('count')}>{count}</p>
          <p className={cx('count-text')}>{text}</p>
          <div className={cx('btn-content')}>
            <button className={cx('btn')} onClick={increaseCount}>
              <span>+</span>
            </button>
            <button className={cx('btn')} onClick={decreaseCount}>
              <span>-</span>
            </button>
            <button className={cx('btn', 'btn-reset')} onClick={removeAllCount}>
              <span>reset</span>
            </button>
          </div>
        </div>
      </section>

      <section className={cx('section', 'server-side-randering')}>
        <h1 className={cx('title')}>getServerSideProps</h1>
        <p className={cx('folder-name')}>{folders.name}</p>

        <ul className={cx('card-list')}>
          {links.map((item: any) => (
            <li key={item.id} className={cx('card-list-item')}>
              <h2 className={cx('card-list-item-title')}>{item.title}</h2>
              <p>{item.description}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className={cx('section', 'signin')}>
        <form onSubmit={handleSubmit}>
          <h1 className={cx('title')}>signin</h1>
          <fieldset className={cx('fieldset')}>
            <legend className='visually-hidden'>login</legend>
            <input
              name='email'
              type='email'
              value={value.email}
              placeholder='email'
              className={cx('input')}
              onChange={handleChangeValue}
            />
            <input
              name='password'
              type='password'
              value={value.password}
              placeholder='password'
              className={cx('input')}
              onChange={handleChangeValue}
            />
            <button className={cx('btn-login')} type='submit'>
              login
            </button>
          </fieldset>
        </form>
      </section>

      <section className={cx('section', 'user-info')}>
        <h1 className={cx('title')}>user 정보</h1>
        <div className={cx('user-content')}>
          <p className={cx('user')}>이름: {user?.name}</p>
          <p className={cx('user')}>이메일: {user?.email}</p>
          <button className={cx('btn-logout')} onClick={handleLogout}>
            logout
          </button>
        </div>
      </section>
    </main>
  );
};

export default Home;

export const getServerSideProps = async () => {
  const folders = await getSharedData();

  return {
    props: {
      folders,
    },
  };
};
