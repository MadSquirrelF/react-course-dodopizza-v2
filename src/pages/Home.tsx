/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import qs from 'qs';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ErrorSticker from '../assets/img/error.png';
import empty_pizza_png from '../assets/img/empty _pizza.png';
import {
  setCategoryId,
} from '../Redux/filter/slice';


import { Categories, Sort, PizzaBlock, Skeleton, Search } from '../components';

import { useAppDispatch } from '../Redux/store';
import { selectFilter } from '../Redux/filter/selectors';
import { selectPizzaData } from '../Redux/pizza/selectors';
import { fetchPizzas } from '../Redux/pizza/asyncActions';

import Up from '../components/Up';




const Home: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();




  const isMounted = React.useRef(false);

  const { items, status } = useSelector(selectPizzaData);

  const { categoryId, sort, searchValue } = useSelector(selectFilter);

  const sortType = sort;



  const [scroll, setScroll] = React.useState(0);

  const handleScroll = () => {
    setScroll(window.scrollY);
  };
  const handleUpButton = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);



  const onChangeCategory = React.useCallback((idx: number) => {
    dispatch(setCategoryId(idx));
  }, []);



  const getPizzas = async () => {
    const category = categoryId > 0 ? String(categoryId) : '';
    const search = searchValue;
    const order = sortType.sortOrder;
    const sortBy = sortType.sortProperty;
    dispatch(
      fetchPizzas({
        category,
        sortBy,
        order,
        search,
      }),
    );
    window.scrollTo(0, 0);
  };




  React.useEffect(() => {
    getPizzas();
    window.scrollTo(0, scroll);
  }, [categoryId, sortType, searchValue]);

  React.useEffect(() => {
    if (isMounted.current) {
      const queryString = qs.stringify({
        sortProperty: sort.sortProperty,
        sortOrder: sort.sortOrder,
        categoryId,
      });

      navigate(`?${queryString}`);
    }
    isMounted.current = true;

  }, [categoryId, sort.sortProperty, sort.sortOrder]);

  const pizzas = items.map((obj: any) => <PizzaBlock key={obj.id} {...obj} />);

  const skeletons = [...new Array(6)].map((_, index) => <Skeleton key={index} />);

  return (

    <div className="container">
      <Up value={scroll} handleUpButton={handleUpButton} />
      <div className="content__top">
        <Categories value={categoryId} onChangeCategory={onChangeCategory} />
        <Sort value={sort} />
      </div>
      <div className="search_container">
        <h2 className="content__title">Все пиццы</h2>
        <Search />
      </div>

      {status === 'error' ? (
        <div className="content__error-info">
          <h2>Произошла ошибка 😕</h2>

          <p>
            К сожалению, не удалось сохранить пиццы.
            <br />
            Попробуйте повторить попытку!
          </p>
          <img src={ErrorSticker} alt="Error pizzas" />
        </div>
      ) : status === 'loading' ? (<div className="content__items">{skeletons}</div>) : pizzas.length > 0 ?
        (<div className="content__items">{pizzas}</div>) : (<div className="content__error-info">
          <h2>Не удалось найти товар 😕</h2>
          <p>
            Попробуйте выбрать что-то другое!
          </p>
          <img src={empty_pizza_png} alt="empty pizzas" />
        </div>)



      }

    </div>
  );
};

export default Home;
