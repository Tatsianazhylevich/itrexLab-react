import { Img404Styled, Text404Styled } from './Page404.styles';


export const Page404 = function () {
    return (
      <div>
        <Img404Styled />
        <Text404Styled>
         Oops...
            <br />
        We can't seem to find the page you are looking for.
        </Text404Styled>
      </div>
    );
};
  