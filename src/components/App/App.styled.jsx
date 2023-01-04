import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: start;
  color: #010101;
  overflow-y: hidden;
`;

export const Wrapper = styled.div`
  padding-right: 24px;
  padding-left: 24px;
  position: relative;
  width: 900px;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const Header = styled.header`
  top: 0;
  left: 0;
  width: 100%;
  position: sticky;
  z-index: 1100;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 64px;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  color: #fff;
  background-color: #373e67;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const Main = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
  justify-content: flex-start;
  align-items: flex-start;
  padding-top: 24px;
  padding-bottom: 24px;
`;

export const Section = styled.div`
  display: flex;
  width: calc(100% - 330px);
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  overflow: auto;
`;

export const Title = styled.h2`
  font-size: 24px;
  font-weight: 700;
  margin: 0;
`;

export const SectionTitle = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  position: sticky;
  z-index: 1100;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 50px;
  margin-bottom: 20px;
  color: #fff;
  background-color: #373e67;
  border-radius: 30px;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const Footer = styled.div`
  width: 100%;
  height: 34px;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  color: #fff;
  background-color: #373e67;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;
