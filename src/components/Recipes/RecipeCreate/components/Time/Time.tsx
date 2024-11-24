import { useDispatch, useSelector } from 'react-redux';
import { setTime } from '../../../../../redux/postCreateSlice';
import { AppDispatch, RootState } from '../../../../../store/store';

const Time = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { cookTime } = useSelector((state: RootState) => state.postCreate.post);

  const handleHoursChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = Number(e.target.value);

    if (value > 12) {
      value = 12;
    }

    dispatch(setTime({ hours: e.target.value }));
  };

  const handleMinutesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = Number(e.target.value);

    if (value > 60) {
      value = 60;
    }

    dispatch(setTime({ minutes: e.target.value }));
  };

  return (
    <div className="grid mb-5">
      <label className="titleForm">Время на приготовление</label>
      <div className="flex gap-2.5">
        <div className="flex gap-2.5 items-center">
          <input
            className="inputStyle text-center"
            type="number"
            placeholder="0"
            max={12}
            value={cookTime.hours}
            onChange={handleHoursChange}
          />
          <label>Часов</label>
        </div>
        <div className="flex gap-2.5 items-center">
          <input
            className="inputStyle text-center"
            type="number"
            placeholder="0"
            max={60}
            value={cookTime.minutes}
            onChange={handleMinutesChange}
          />
          <label>Минут</label>
        </div>
      </div>
    </div>
  );
};

export default Time;
