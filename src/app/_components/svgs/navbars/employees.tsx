'use client';

import type { IconInterface } from '@/app/_types/navbar';
import React from 'react';

const EmployeesSVG = ({ active }: IconInterface) => {
  if (active) {
    return (
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M8.01501 18.4749C8.0184 18.5427 8.00798 18.6104 7.98438 18.674C7.96077 18.7376 7.92448 18.7957 7.87771 18.8448C7.83094 18.8939 7.77466 18.933 7.71231 18.9596C7.64996 18.9863 7.58283 19 7.51501 18.9999H2.00001C1.77431 19.0003 1.55512 18.9243 1.37811 18.7842C1.20109 18.6442 1.07664 18.4484 1.02501 18.2287C0.992865 18.0783 0.994347 17.9227 1.02935 17.7729C1.06436 17.6232 1.13203 17.483 1.22751 17.3624C2.10982 16.1925 3.28041 15.2712 4.62501 14.6887C4.03467 14.1505 3.5819 13.4786 3.30461 12.7294C3.02732 11.9802 2.9336 11.1754 3.03128 10.3825C3.12897 9.58962 3.41522 8.83168 3.86606 8.17218C4.31691 7.51267 4.91922 6.97079 5.62255 6.59192C6.32588 6.21306 7.10976 6.00824 7.90852 5.99462C8.70729 5.981 9.49769 6.15898 10.2135 6.51365C10.9294 6.86832 11.5498 7.38935 12.0229 8.0331C12.4959 8.67686 12.8079 9.4246 12.9325 10.2137C12.9486 10.3198 12.9296 10.4283 12.8784 10.5226C12.8272 10.6169 12.7465 10.6919 12.6488 10.7362C11.2618 11.3774 10.0871 12.402 9.2634 13.689C8.4397 14.9761 8.00133 16.4719 8.00001 17.9999C8.00001 18.1599 8.00001 18.3174 8.01501 18.4749ZM30.765 17.3612C29.8848 16.1925 28.7169 15.2718 27.375 14.6887C27.9654 14.1505 28.4181 13.4786 28.6954 12.7294C28.9727 11.9802 29.0664 11.1754 28.9687 10.3825C28.8711 9.58962 28.5848 8.83168 28.134 8.17218C27.6831 7.51267 27.0808 6.97079 26.3775 6.59192C25.6741 6.21306 24.8903 6.00824 24.0915 5.99462C23.2927 5.981 22.5023 6.15898 21.7865 6.51365C21.0707 6.86832 20.4502 7.38935 19.9772 8.0331C19.5041 8.67686 19.1922 9.4246 19.0675 10.2137C19.0514 10.3198 19.0704 10.4283 19.1216 10.5226C19.1729 10.6169 19.2535 10.6919 19.3513 10.7362C20.7383 11.3774 21.9129 12.402 22.7366 13.689C23.5603 14.9761 23.9987 16.4719 24 17.9999C24 18.1599 24 18.3174 23.985 18.4749C23.9816 18.5427 23.992 18.6104 24.0157 18.674C24.0393 18.7376 24.0755 18.7957 24.1223 18.8448C24.1691 18.8939 24.2254 18.933 24.2877 18.9596C24.3501 18.9863 24.4172 19 24.485 18.9999H30C30.2257 19.0003 30.4449 18.9243 30.6219 18.7842C30.7989 18.6442 30.9234 18.4484 30.975 18.2287C31.0074 18.078 31.0059 17.9221 30.9706 17.772C30.9354 17.622 30.8673 17.4817 30.7713 17.3612H30.765ZM19.64 22.7587C20.6357 21.9962 21.3674 20.9408 21.7323 19.7409C22.0972 18.541 22.0769 17.257 21.6744 16.0692C21.2718 14.8814 20.5071 13.8497 19.4879 13.1189C18.4686 12.3882 17.246 11.9952 15.9919 11.9952C14.7377 11.9952 13.5151 12.3882 12.4959 13.1189C11.4766 13.8497 10.712 14.8814 10.3094 16.0692C9.90683 17.257 9.88657 18.541 10.2515 19.7409C10.6164 20.9408 11.3481 21.9962 12.3438 22.7587C10.5769 23.5242 9.1016 24.8353 8.13376 26.4999C8.04599 26.652 7.99978 26.8244 7.99979 27C7.9998 27.1756 8.04603 27.348 8.13382 27.5C8.22161 27.6521 8.34788 27.7783 8.49993 27.8661C8.65199 27.9538 8.82446 28 9.00001 27.9999H23C23.1756 28 23.348 27.9538 23.5001 27.8661C23.6521 27.7783 23.7784 27.6521 23.8662 27.5C23.954 27.348 24.0002 27.1756 24.0002 27C24.0002 26.8244 23.954 26.652 23.8663 26.4999C22.8964 24.8342 21.4183 23.523 19.6488 22.7587H19.64Z"
          fill="url(#paint0_linear_15_384)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_15_384"
            x1="1.00195"
            y1="16.9969"
            x2="30.9982"
            y2="16.9969"
            gradientUnits="userSpaceOnUse">
            <stop stopColor="#CDAD8F" />
            <stop offset="0.504277" stopColor="#CDAD8F" />
            <stop offset="1" stopColor="#FAE1CB" />
          </linearGradient>
        </defs>
      </svg>
    );
  }
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      className="shrink-0"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M30.6 18.7999C30.495 18.8787 30.3754 18.936 30.2482 18.9686C30.121 19.0012 29.9886 19.0084 29.8586 18.9898C29.7286 18.9713 29.6035 18.9273 29.4905 18.8604C29.3775 18.7935 29.2788 18.705 29.2 18.5999C28.5973 17.7897 27.8127 17.1324 26.9096 16.6808C26.0064 16.2292 25.0098 15.996 24 15.9999C23.8034 15.9999 23.6111 15.9419 23.4472 15.8332C23.2834 15.7244 23.1552 15.5698 23.0788 15.3886C23.0269 15.2656 23.0001 15.1334 23.0001 14.9999C23.0001 14.8664 23.0269 14.7342 23.0788 14.6111C23.1552 14.43 23.2834 14.2754 23.4472 14.1666C23.6111 14.0579 23.8034 13.9999 24 13.9999C24.5611 13.9998 25.1109 13.8424 25.587 13.5456C26.0632 13.2487 26.4465 12.8243 26.6935 12.3204C26.9405 11.8166 27.0412 11.2537 26.9843 10.6955C26.9273 10.1373 26.715 9.60624 26.3714 9.16268C26.0278 8.71911 25.5666 8.3808 25.0404 8.18617C24.5141 7.99154 23.9438 7.94839 23.3943 8.06163C22.8448 8.17486 22.338 8.43994 21.9315 8.82676C21.5251 9.21358 21.2353 9.70662 21.095 10.2499C21.0622 10.3771 21.0046 10.4966 20.9256 10.6016C20.8466 10.7066 20.7477 10.7949 20.6345 10.8617C20.5213 10.9284 20.3961 10.9722 20.266 10.9906C20.1359 11.0089 20.0035 11.0015 19.8763 10.9686C19.749 10.9358 19.6295 10.8783 19.5246 10.7992C19.4196 10.7202 19.3312 10.6213 19.2645 10.5081C19.1977 10.395 19.1539 10.2697 19.1356 10.1397C19.1172 10.0096 19.1247 9.87712 19.1575 9.7499C19.3522 8.99654 19.72 8.29902 20.2317 7.71284C20.7435 7.12665 21.3849 6.66799 22.1051 6.37334C22.8252 6.07868 23.6042 5.95618 24.3801 6.01556C25.1559 6.07495 25.9072 6.31459 26.5741 6.71541C27.241 7.11624 27.8052 7.66719 28.2217 8.32442C28.6383 8.98165 28.8957 9.72703 28.9734 10.5012C29.0512 11.2755 28.9472 12.0571 28.6697 12.7841C28.3922 13.511 27.9489 14.1632 27.375 14.6886C28.7348 15.2774 29.9168 16.2117 30.8038 17.3986C30.8825 17.504 30.9398 17.6238 30.9722 17.7513C31.0046 17.8788 31.0115 18.0114 30.9926 18.1415C30.9737 18.2717 30.9293 18.3969 30.8619 18.5098C30.7945 18.6228 30.7055 18.7214 30.6 18.7999ZM23.865 26.4999C23.9374 26.6137 23.9859 26.741 24.0078 26.8741C24.0297 27.0072 24.0245 27.1433 23.9924 27.2743C23.9603 27.4053 23.902 27.5284 23.8211 27.6363C23.7402 27.7442 23.6383 27.8346 23.5215 27.9021C23.4048 27.9696 23.2756 28.0128 23.1417 28.0291C23.0078 28.0453 22.872 28.0343 22.7425 27.9968C22.6129 27.9592 22.4924 27.8958 22.388 27.8104C22.2836 27.725 22.1975 27.6194 22.135 27.4999C21.5051 26.4332 20.6079 25.5492 19.532 24.9351C18.4562 24.3211 17.2388 23.9981 16 23.9981C14.7612 23.9981 13.5438 24.3211 12.468 24.9351C11.3921 25.5492 10.495 26.4332 9.86501 27.4999C9.8025 27.6194 9.71646 27.725 9.61206 27.8104C9.50767 27.8958 9.38708 27.9592 9.25755 27.9968C9.12802 28.0343 8.99223 28.0453 8.85835 28.0291C8.72446 28.0128 8.59525 27.9696 8.47848 27.9021C8.36172 27.8346 8.25981 27.7442 8.1789 27.6363C8.09798 27.5284 8.03973 27.4053 8.00764 27.2743C7.97555 27.1433 7.9703 27.0072 7.99219 26.8741C8.01408 26.741 8.06266 26.6137 8.13501 26.4999C9.10451 24.8341 10.5828 23.5232 12.3525 22.7599C11.3567 21.9974 10.6248 20.9421 10.2598 19.7422C9.89473 18.5423 9.91489 17.2581 10.3174 16.0703C10.7199 14.8824 11.4846 13.8506 12.5038 13.1197C13.5231 12.3889 14.7458 11.9959 16 11.9959C17.2542 11.9959 18.4769 12.3889 19.4962 13.1197C20.5155 13.8506 21.2801 14.8824 21.6826 16.0703C22.0851 17.2581 22.1053 18.5423 21.7403 19.7422C21.3752 20.9421 20.6434 21.9974 19.6475 22.7599C21.4173 23.5232 22.8955 24.8341 23.865 26.4999ZM16 21.9999C16.7911 21.9999 17.5645 21.7653 18.2223 21.3258C18.8801 20.8862 19.3928 20.2615 19.6955 19.5306C19.9983 18.7997 20.0775 17.9955 19.9232 17.2195C19.7688 16.4436 19.3878 15.7309 18.8284 15.1715C18.269 14.6121 17.5563 14.2311 16.7804 14.0768C16.0044 13.9224 15.2002 14.0016 14.4693 14.3044C13.7384 14.6071 13.1137 15.1198 12.6741 15.7776C12.2346 16.4354 12 17.2088 12 17.9999C12 19.0608 12.4214 20.0782 13.1716 20.8283C13.9217 21.5785 14.9391 21.9999 16 21.9999ZM9.00001 14.9999C9.00001 14.7347 8.89466 14.4803 8.70712 14.2928C8.51958 14.1053 8.26523 13.9999 8.00001 13.9999C7.43892 13.9998 6.88909 13.8424 6.41297 13.5456C5.93686 13.2487 5.55353 12.8243 5.30655 12.3204C5.05957 11.8166 4.95882 11.2537 5.01576 10.6955C5.0727 10.1373 5.28503 9.60624 5.62865 9.16268C5.97226 8.71911 6.43339 8.3808 6.95964 8.18617C7.48589 7.99154 8.05618 7.94839 8.60572 8.06163C9.15526 8.17486 9.66204 8.43994 10.0685 8.82676C10.4749 9.21358 10.7647 9.70662 10.905 10.2499C10.9713 10.5068 11.137 10.7269 11.3655 10.8617C11.5941 10.9965 11.8668 11.035 12.1238 10.9686C12.3807 10.9023 12.6008 10.7367 12.7355 10.5081C12.8703 10.2796 12.9088 10.0068 12.8425 9.7499C12.6478 8.99654 12.28 8.29902 11.7683 7.71284C11.2566 7.12665 10.6151 6.66799 9.89495 6.37334C9.17479 6.07868 8.3958 5.95618 7.61996 6.01556C6.84412 6.07495 6.09285 6.31459 5.42592 6.71541C4.75899 7.11624 4.19482 7.66719 3.77829 8.32442C3.36176 8.98165 3.10437 9.72703 3.0266 10.5012C2.94883 11.2755 3.05283 12.0571 3.33032 12.7841C3.60781 13.511 4.05113 14.1632 4.62501 14.6886C3.26662 15.278 2.08591 16.2122 1.20001 17.3986C1.04072 17.6108 0.972231 17.8776 1.00962 18.1403C1.04701 18.4029 1.18721 18.64 1.39939 18.7993C1.61156 18.9586 1.87832 19.0271 2.14099 18.9897C2.40366 18.9523 2.64072 18.8121 2.80001 18.5999C3.40275 17.7897 4.18728 17.1324 5.09046 16.6808C5.99364 16.2292 6.99023 15.996 8.00001 15.9999C8.26523 15.9999 8.51958 15.8945 8.70712 15.707C8.89466 15.5195 9.00001 15.2651 9.00001 14.9999Z"
        className="fill-textLight"
      />
    </svg>
  );
};

export default EmployeesSVG;

