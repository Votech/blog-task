import { ComponentProps } from 'react';

type Props = ComponentProps<'svg'> & {};

export default function Logo({ ...svgProps }: Props) {
  return (
    <svg
      viewBox="0 0 200 58"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...svgProps}
    >
      <path
        d="M96.652 27.744H87.724L85.516 32H80.812L92.812 9.632H98.028L102.092 32H97.356L96.652 27.744ZM96.076 24.256L94.476 14.784L89.548 24.256H96.076Z"
        fill="#8E2F3F"
      />
      <path
        d="M106.022 20.8C106.406 18.6027 107.238 16.64 108.518 14.912C109.82 13.1627 111.409 11.808 113.286 10.848C115.185 9.86667 117.201 9.376 119.334 9.376C121.83 9.376 123.91 10.016 125.574 11.296C127.238 12.576 128.241 14.3467 128.582 16.608H123.43C123.089 15.584 122.502 14.816 121.67 14.304C120.838 13.7707 119.814 13.504 118.598 13.504C117.297 13.504 116.081 13.8027 114.95 14.4C113.841 14.9973 112.902 15.8507 112.134 16.96C111.388 18.0693 110.886 19.3493 110.63 20.8C110.524 21.4827 110.47 22.048 110.47 22.496C110.47 24.224 110.961 25.5893 111.942 26.592C112.945 27.5947 114.3 28.096 116.006 28.096C117.222 28.096 118.342 27.8293 119.366 27.296C120.39 26.7627 121.254 25.984 121.958 24.96H127.11C125.958 27.2427 124.326 29.024 122.214 30.304C120.124 31.5627 117.83 32.192 115.334 32.192C113.457 32.192 111.793 31.8187 110.342 31.072C108.913 30.304 107.804 29.2267 107.014 27.84C106.225 26.4533 105.83 24.864 105.83 23.072C105.83 22.3253 105.894 21.568 106.022 20.8ZM157.977 9.664L154.041 32H149.529L152.089 17.536L143.577 32H140.153L136.729 17.504L134.169 32H129.657L133.625 9.664H138.713L142.905 26.24L152.889 9.664H157.977ZM166.278 13.152L165.254 18.944H172.774L172.166 22.4H164.646L163.59 28.448H172.07L171.43 32H158.438L162.406 9.632H175.366L174.758 13.152H166.278ZM86.55 38.622L83.844 54H82.304L85.01 38.622H86.55ZM95.1414 41.768C96.3734 41.768 97.3561 42.1053 98.0894 42.78C98.8374 43.44 99.2114 44.408 99.2114 45.684C99.2114 46.1533 99.1747 46.5787 99.1014 46.96L97.8474 54H96.3294L97.5394 47.136C97.5981 46.7987 97.6274 46.4393 97.6274 46.058C97.6274 45.09 97.3634 44.3567 96.8354 43.858C96.3074 43.3593 95.5667 43.11 94.6134 43.11C93.4547 43.11 92.4647 43.4767 91.6434 44.21C90.8221 44.9433 90.2867 46.0213 90.0374 47.444V47.378L88.8714 54H87.3314L89.4434 41.988H90.9834L90.6094 44.056C91.1227 43.3227 91.7754 42.758 92.5674 42.362C93.3594 41.966 94.2174 41.768 95.1414 41.768ZM105.257 54.176C104.04 54.176 103.05 53.8973 102.287 53.34C101.525 52.768 101.143 51.9907 101.143 51.008C101.143 50.832 101.151 50.7 101.165 50.612H102.661C102.603 51.316 102.808 51.8807 103.277 52.306C103.747 52.7313 104.436 52.944 105.345 52.944C106.269 52.944 107.01 52.7533 107.567 52.372C108.125 51.976 108.403 51.4553 108.403 50.81C108.403 50.4287 108.286 50.106 108.051 49.842C107.817 49.578 107.523 49.3653 107.171 49.204C106.834 49.028 106.357 48.83 105.741 48.61C104.979 48.3313 104.363 48.0747 103.893 47.84C103.439 47.5907 103.043 47.2533 102.705 46.828C102.383 46.388 102.221 45.838 102.221 45.178C102.221 44.518 102.412 43.9313 102.793 43.418C103.175 42.9047 103.695 42.5087 104.355 42.23C105.03 41.9513 105.793 41.812 106.643 41.812C107.831 41.812 108.799 42.1053 109.547 42.692C110.31 43.2787 110.691 44.056 110.691 45.024C110.691 45.2293 110.684 45.3833 110.669 45.486H109.217C109.232 45.4273 109.239 45.332 109.239 45.2C109.239 44.5547 108.983 44.034 108.469 43.638C107.971 43.242 107.325 43.044 106.533 43.044C105.741 43.044 105.081 43.2347 104.553 43.616C104.04 43.9827 103.783 44.4813 103.783 45.112C103.783 45.5373 103.908 45.8967 104.157 46.19C104.407 46.4687 104.715 46.696 105.081 46.872C105.448 47.048 105.939 47.2533 106.555 47.488C107.289 47.7667 107.875 48.0233 108.315 48.258C108.77 48.4927 109.151 48.8153 109.459 49.226C109.767 49.6367 109.921 50.15 109.921 50.766C109.921 51.8073 109.489 52.636 108.623 53.252C107.758 53.868 106.636 54.176 105.257 54.176ZM115.02 50.744C114.976 51.008 114.954 51.2353 114.954 51.426C114.954 51.8953 115.079 52.2253 115.328 52.416C115.592 52.592 116.017 52.68 116.604 52.68H118.012L117.77 54H116.12C115.211 54 114.529 53.824 114.074 53.472C113.619 53.12 113.392 52.5407 113.392 51.734C113.392 51.4113 113.421 51.0813 113.48 50.744L114.8 43.286H113.128L113.37 41.988H115.042L115.57 38.974H117.11L116.582 41.988H119.904L119.662 43.286H116.34L115.02 50.744ZM123.61 39.722C123.331 39.722 123.104 39.6413 122.928 39.48C122.752 39.304 122.664 39.0767 122.664 38.798C122.664 38.4167 122.796 38.1013 123.06 37.852C123.324 37.588 123.639 37.456 124.006 37.456C124.285 37.456 124.505 37.5367 124.666 37.698C124.842 37.8593 124.93 38.072 124.93 38.336C124.93 38.7173 124.798 39.0473 124.534 39.326C124.27 39.59 123.962 39.722 123.61 39.722ZM123.962 41.988L121.85 54H120.31L122.422 41.988H123.962ZM127.889 50.744C127.845 51.008 127.823 51.2353 127.823 51.426C127.823 51.8953 127.948 52.2253 128.197 52.416C128.461 52.592 128.887 52.68 129.473 52.68H130.881L130.639 54H128.989C128.08 54 127.398 53.824 126.943 53.472C126.489 53.12 126.261 52.5407 126.261 51.734C126.261 51.4113 126.291 51.0813 126.349 50.744L127.669 43.286H125.997L126.239 41.988H127.911L128.439 38.974H129.979L129.451 41.988H132.773L132.531 43.286H129.209L127.889 50.744ZM145.697 41.988L143.585 54H142.045L142.419 51.888C141.92 52.636 141.275 53.208 140.483 53.604C139.691 54 138.84 54.198 137.931 54.198C136.699 54.198 135.709 53.868 134.961 53.208C134.213 52.5333 133.839 51.558 133.839 50.282C133.839 49.8127 133.876 49.3873 133.949 49.006L135.181 41.988H136.699L135.489 48.83C135.43 49.1673 135.401 49.5193 135.401 49.886C135.401 50.854 135.665 51.5947 136.193 52.108C136.736 52.6067 137.484 52.856 138.437 52.856C139.552 52.856 140.512 52.5187 141.319 51.844C142.126 51.1547 142.668 50.15 142.947 48.83L144.157 41.988H145.697ZM149.653 50.744C149.609 51.008 149.587 51.2353 149.587 51.426C149.587 51.8953 149.712 52.2253 149.961 52.416C150.225 52.592 150.65 52.68 151.237 52.68H152.645L152.403 54H150.753C149.844 54 149.162 53.824 148.707 53.472C148.252 53.12 148.025 52.5407 148.025 51.734C148.025 51.4113 148.054 51.0813 148.113 50.744L149.433 43.286H147.761L148.003 41.988H149.675L150.203 38.974H151.743L151.215 41.988H154.537L154.295 43.286H150.973L149.653 50.744ZM162.291 41.812C163.303 41.812 164.168 42.01 164.887 42.406C165.605 42.7873 166.148 43.3153 166.515 43.99C166.896 44.6647 167.087 45.4347 167.087 46.3C167.087 46.696 167.057 47.048 166.999 47.356C166.911 47.796 166.823 48.192 166.735 48.544H156.769C156.725 48.8227 156.703 49.0867 156.703 49.336C156.703 50.4653 157.04 51.338 157.715 51.954C158.404 52.57 159.277 52.878 160.333 52.878C161.345 52.878 162.232 52.636 162.995 52.152C163.757 51.668 164.315 51.0153 164.667 50.194H166.317C165.818 51.3673 165.019 52.328 163.919 53.076C162.833 53.8093 161.565 54.176 160.113 54.176C158.617 54.176 157.414 53.7507 156.505 52.9C155.61 52.0347 155.163 50.8613 155.163 49.38C155.163 48.94 155.207 48.478 155.295 47.994C155.515 46.7473 155.955 45.6547 156.615 44.716C157.289 43.7773 158.118 43.0587 159.101 42.56C160.083 42.0613 161.147 41.812 162.291 41.812ZM165.415 47.4C165.488 46.9893 165.525 46.6447 165.525 46.366C165.525 45.3247 165.195 44.5253 164.535 43.968C163.875 43.4107 163.031 43.132 162.005 43.132C161.257 43.132 160.538 43.2933 159.849 43.616C159.159 43.9387 158.558 44.4227 158.045 45.068C157.531 45.7133 157.179 46.4907 156.989 47.4H165.415Z"
        fill="black"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.6768 7.25057L18.2904 7.12176L18.2903 7.12173C17.9039 6.99294 17.5175 6.86415 17.2599 6.99294L14.1686 6.09133L17.1311 4.80327C17.904 4.41685 18.6768 4.15923 19.4496 3.90162L19.836 3.7728L20.2224 3.90162L21.3817 4.28806C25.1171 5.3185 28.9812 5.06089 32.8454 3.64403C33.0386 3.57963 33.2318 3.48301 33.425 3.3864C33.6182 3.28979 33.8115 3.19318 34.0047 3.12877L34.3911 3H34.7775C35.6791 3.12881 36.452 3.38642 37.2248 3.64403L39.9297 4.54564L35.9368 6.47773C32.7166 7.76578 29.4965 8.53863 26.1475 8.53863C22.9274 8.53863 20.3512 7.8946 18.6768 7.25057ZM9.70788 15.1316L9.7079 15.1316C9.86746 15.0801 10.024 15.0295 10.1756 14.979C13.6533 14.0774 17.3887 14.2062 21.1241 15.623C23.5714 16.5247 26.0187 16.9111 28.7236 16.9111C34.1334 16.9111 39.5432 14.979 44.5667 11.2436L46.4987 9.69796L47.1428 9.18275L45.9835 8.28109C45.5971 7.89467 45.0819 7.50827 44.5667 7.25066L43.7938 6.73545L43.1498 7.25066C43.021 7.31506 42.9244 7.41167 42.8278 7.50827C42.7312 7.60487 42.6346 7.70147 42.5058 7.76588C35.6791 12.9181 28.8524 14.335 22.4121 11.8877C17.7751 10.2132 13.1381 9.82678 8.50108 11.2436C8.11467 11.3724 7.72825 11.5012 7.21303 11.63L6.95544 11.7589L6.569 12.1453C6.569 12.2249 6.5198 12.2553 6.45181 12.2973C6.4098 12.3233 6.3606 12.3537 6.31141 12.4029C6.0538 12.7893 5.76398 13.1435 5.47416 13.4977C5.18434 13.852 4.89453 14.2062 4.63691 14.5926L2.18962 18.328L6.1826 16.2671C6.69278 16.2671 7.12212 16.1054 7.47064 15.9742C7.56207 15.9398 7.64794 15.9074 7.72824 15.8807C8.34948 15.57 9.05398 15.3426 9.70788 15.1316ZM13.0094 23.3513C9.40282 24.3817 6.0539 26.3138 3.09137 29.4052C2.82729 29.5812 2.62336 29.8174 2.43848 30.0316L2.43846 30.0316C2.35282 30.1308 2.27126 30.2252 2.18971 30.3068L0 32.6253L0.128813 29.4052C0.195514 29.005 0.227679 28.5702 0.261075 28.1188C0.292171 27.6985 0.324335 27.2638 0.38644 26.8291V26.4426L0.644028 26.185L1.28806 25.541L3.99298 23.3513C6.56909 21.6768 9.14522 20.3888 11.8501 19.6159C16.1007 18.4567 20.7377 18.7143 25.2459 20.3888C34.7775 23.9953 43.1499 18.7143 48.5597 13.5621L49.075 13.0468L49.9766 12.1452L50.7494 13.1757C50.895 13.3697 51.0222 13.5637 51.1449 13.7508C51.3481 14.0606 51.539 14.3516 51.7799 14.5925L52.2951 15.3653L51.6511 15.8806L49.9766 17.555C45.5972 21.2904 35.5504 28.2459 23.9579 23.9953C20.2225 22.5785 16.4871 22.4497 13.0094 23.3513ZM15.5856 31.7235C19.0634 30.8219 22.7987 30.9507 26.5341 32.3675C30.6559 33.9132 41.2179 36.1029 53.0681 25.4121L55.0001 23.48L55.129 23.3512L55.6442 22.8359L55.3865 22.1919C55.2577 21.6767 55.0001 21.0327 54.7425 20.3886L54.0985 18.5853L52.8104 19.8734C52.7272 20.0397 52.5904 20.1524 52.4344 20.2807C52.3489 20.3511 52.2577 20.4262 52.1664 20.5174C46.499 26.3137 37.7402 32.2387 27.6933 28.6322C23.1851 26.9577 18.5481 26.7001 14.2976 27.8593C10.1758 29.0186 6.56921 31.2083 3.22026 34.2996V34.1708L1.28818 36.2317C1.28818 36.3113 1.23898 36.3417 1.17099 36.3838C1.12897 36.4097 1.07978 36.4401 1.03059 36.4893L0.644147 36.8757L0.772961 37.391C0.837363 37.713 0.933966 38.035 1.03057 38.357C1.12717 38.679 1.22377 39.001 1.28818 39.323L2.06102 41.3839L3.34907 39.7095C3.41348 39.5807 3.51008 39.4841 3.60668 39.3875C3.70328 39.2909 3.79988 39.1943 3.86429 39.0655L4.08815 38.8628C6.77433 36.4298 10.4488 33.1017 15.5856 31.7235ZM33.2321 45.6347C28.7239 43.9602 24.0869 43.7027 19.8363 44.8619C16.8738 45.6347 14.0401 47.1804 11.464 49.1125L9.66065 50.6582L9.14543 51.1734L10.3047 52.2038C10.3843 52.2038 10.4147 52.253 10.4567 52.321C10.4827 52.363 10.5131 52.4122 10.5623 52.4614C10.7509 52.65 10.9395 52.7696 11.1786 52.9211L11.1786 52.9212C11.2661 52.9767 11.3604 53.0364 11.464 53.1055L12.2368 53.6207L13.0096 52.9766C13.1384 52.8478 13.396 52.5902 13.6536 52.4614C15.9721 50.5293 18.5482 49.2413 21.2532 48.5973C24.7309 47.6956 28.4663 47.8244 32.2016 49.2413C35.293 50.4005 41.6045 51.8174 49.204 48.5973L49.4616 48.4684L49.848 48.082C49.848 48.0024 49.8972 47.972 49.9652 47.93C50.0072 47.904 50.0564 47.8736 50.1056 47.8244C50.7497 47.0516 51.3937 46.2788 51.9089 45.3771L54.485 41.3841L50.3632 43.7026C44.3094 47.0516 38.7707 47.6956 33.2321 45.6347ZM36.9675 54.3935C36.7743 54.3291 36.6133 54.2647 36.4523 54.2003C36.2913 54.1359 36.1303 54.0715 35.937 54.0071C31.4289 52.3326 26.7918 52.075 22.5412 53.2343L22.5409 53.2344C21.6394 53.492 20.7379 53.7495 19.8363 54.1359L16.745 55.5528L15.9722 55.9392L18.5483 56.8408L20.8668 57.6137L21.2532 57.7425L21.6396 57.6137C21.7684 57.5707 21.8973 57.5135 22.0261 57.4562C22.2837 57.3417 22.5413 57.2272 22.7989 57.2272C23.0565 57.2272 23.3141 57.0984 23.5717 56.9696C26.663 56.1968 30.012 56.1968 33.6185 57.356C33.8117 57.4204 33.9727 57.4848 34.1338 57.5493L34.1339 57.5493C34.2949 57.6137 34.4559 57.6781 34.649 57.7425L35.293 58.0001L35.6794 57.8712C35.8165 57.8321 35.9566 57.7929 36.0982 57.7533L36.0985 57.7532C36.8886 57.5323 37.7291 57.2973 38.3843 56.9696L41.9909 55.6816L38.2555 54.7799C38.0623 54.7155 37.8369 54.6511 37.6115 54.5867C37.3861 54.5223 37.1607 54.4579 36.9675 54.3935ZM54.7424 29.6627L56.6745 27.7306L56.5457 30.6932C56.5457 31.0796 56.5135 31.4982 56.4813 31.9168C56.4491 32.3355 56.4169 32.7541 56.4169 33.1405V33.5269L56.0305 33.9133C55.9017 34.0421 55.7729 34.1387 55.6441 34.2354C55.5153 34.332 55.3865 34.4286 55.2577 34.5574C50.8783 38.2927 44.9532 41.6417 39.0282 42.2857C35.6792 42.6721 32.3303 42.2857 29.1101 41.1264C25.3748 39.7096 21.6394 39.5807 18.1616 40.4824C14.2975 41.5128 10.9485 43.5737 7.85719 46.9227L7.34197 47.4379L6.44032 48.5972L5.66751 47.4379C5.4099 46.9227 5.15228 46.5363 4.76586 46.0211L4.25064 45.2482L4.76586 44.6042L6.44032 42.8009C9.66046 39.7096 13.267 37.6487 17.26 36.4894C21.5106 35.3302 26.1476 35.5878 30.6558 37.2622C40.1874 40.8688 48.6886 35.459 53.9696 30.4356L54.7424 29.6627Z"
        fill="#201B21"
      />
    </svg>
  );
}
