import styled from 'styled-components';
import 'antd/dist/antd.min.css';

import { PauseCircleFilled, PlayCircleFilled } from '@ant-design/icons/lib';
import { Button } from 'antd';

export const ExerciseStyled = styled.div`
  padding-top: 10px;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const PlayButtonExercise = styled.div`
  display: flex;
  justify-content: center;
`;

export const PlayButton = styled(Button)`
  width: 50px;
  height: 50px;
  padding: 0;
  margin: 0;
`;

export const PlayCircleFilledStyled = styled(PlayCircleFilled)`
  font-size: 48px;
  color: ${({ theme }) => theme.colors.purple};
`;

export const PauseCircleFilledStyled = styled(PauseCircleFilled)`
  font-size: 48px;
  color: ${({ theme }) => theme.colors.purple};
`;

export const Video = styled.video`
  width: 100%;
`;
