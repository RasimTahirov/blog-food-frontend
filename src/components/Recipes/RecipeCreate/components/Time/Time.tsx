import { useDispatch, useSelector } from 'react-redux';
import { setTime } from '../../../../../redux/postCreateSlice';
import { AppDispatch, RootState } from '../../../../../store/store';
import { InputNumber } from 'antd';

const Time = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { cookTime } = useSelector((state: RootState) => state.postCreate.post);

  const handleHoursChange = (value: number | null) => {
    let updatedValue = value ?? 0;
    if (updatedValue > 12 || updatedValue < 0) {
      updatedValue = 12;
    }

    dispatch(setTime({ hours: updatedValue }));
  };

  const handleMinutesChange = (value: number | null) => {
    let updatedValue = value ?? 0;
    if (updatedValue > 60 || updatedValue < 0) {
      updatedValue = 60;
    }

    dispatch(setTime({ minutes: updatedValue }));
  };

  return (
    <div className="grid mb-5">
      <label className="titleForm">Время на приготовление</label>
      <div className="flex gap-2.5">
        <div className="flex gap-2.5 items-center">
          <InputNumber
            placeholder="кол-во"
            value={cookTime.hours}
            onChange={handleHoursChange}
            className="custom-input"
          />
          <label>Часов</label>
        </div>
        <div className="flex gap-2.5 items-center">
          <InputNumber
            placeholder="кол-во"
            value={cookTime.minutes}
            onChange={handleMinutesChange}
            className="custom-input"
          />
          <label>Минут</label>
        </div>
      </div>
    </div>
  );
};

export default Time;
