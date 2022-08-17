import './CountryComponent.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { fetchCounties } from '../redux/country/country';
import Loader from './Loader';

function CountryComponent() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCounties());
  }, []);
  const loadData = useSelector((state) => state.data);
  const countryData = useSelector((state) => state.data.countries);
  const { loading } = loadData;
  const Obj = Object.keys(countryData);
  return (
    <>
      {loading === true ? (
        <Loader />
      ) : (
        Obj.map((item1) => {
          const { population, capital, name } = countryData[item1];
          return (
            <NavLink to={`country/${name.common}`} key={name.common}>
              <div className="rounded-lg border border-gray-200 grid-cols-auto-fit shadow-md dark:bg-gray-800 dark:border-gray-700 card-div">
                <div className="px-5 py-0">
                  <div className="sub-title flex justify-between mx-1 items-center">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-white-900 dark:text-white country">
                      {name.common}
                    </h5>
                    <svg
                      aria-hidden="true"
                      className="ml-2 -mr-1 w-4 h-4 icon-div"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="btn flex justify-between mx-1 items-center">
                    <p className="mb-3 font-normal text-grey-800 dark:text-grey-800 people">
                      <strong style={{ marginRight: '4px', fontSize: '10px' }}>
                        {population}
                      </strong>
                      people
                    </p>
                    <h6 className="city">{capital}</h6>
                  </div>
                </div>
              </div>
            </NavLink>
          );
        })
      )}
    </>
  );
}

export default CountryComponent;
