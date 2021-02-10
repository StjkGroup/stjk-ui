import React from 'react';
import SvgIcon,{SvgIconProps} from '@material-ui/core/SvgIcon';

const RejectEnUs = (props: SvgIconProps) => {
  return (
    <SvgIcon {...props} viewBox={'0 0 1024 1024'}>
      <path
        d="M362.368 651.170133c9.028267-9.0112 11.076267-13.9776 3.0208-22.050133-7.338667-7.313067-12.373333-5.358933-21.4016 3.669333l-5.461333 5.4528 18.397866 18.389334 5.444267-5.461334z m45.397333 13.499734l-35.387733-7.2192-0.4096 0.392533-6.920533 6.920533 21.3248 21.307734-10.666667 10.6496-56.448-56.448 17.578667-17.578667c15.2832-15.274667 26.436267-16.9984 39.202133-4.224 9.514667 9.531733 10.9824 17.834667 5.538133 27.349333l38.715734 6.331734-12.526934 12.5184zM426.513067 592.2304c-5.444267-5.444267-11.221333-8.96-19.029334-1.143467-8.132267 8.149333-6.5792 14.5664 0.733867 22.3744l18.295467-21.230933z m15.872-2.193067l-26.9312 30.677334c7.645867 7.1424 14.5664 6.903467 23.3472-1.8944 5.290667-5.282133 9.770667-12.834133 11.3152-17.322667l8.302933 8.302933c-1.066667 4.1472-6.033067 11.886933-13.192533 19.037867-13.3376 13.329067-26.026667 16.110933-43.844267-1.706667-17.8176-17.826133-15.0528-30.5152-1.706667-43.861333 15.2064-15.197867 27.016533-9.7536 37.333334 0.5632 2.2016 2.218667 4.078933 4.411733 5.376 6.203733zM417.706667 542.3104c-4.974933-4.9664-4.232533-6.656 0.324266-11.221333 4.548267-4.5568 6.254933-5.290667 11.221334-0.324267 4.881067 4.881067 4.309333 6.749867-0.238934 11.298133-4.5568 4.565333-6.434133 5.137067-11.3152 0.256m61.661867 82.4832l-7.722667-7.722666c1.4592-0.981333 3.242667-2.6112 4.795734-4.155734 5.6064-5.6064 4.394667-8.789333-2.7648-15.940266l-43.0336-43.042134 10.180266-10.171733 43.682134 43.690667c13.815467 13.832533 10.820267 22.2208 0.477866 32.5376-1.877333 1.877333-3.729067 3.413333-5.614933 4.804266M498.304 520.448c-5.4528-5.461333-11.221333-8.951467-19.029333-1.143467-8.1408 8.149333-6.587733 14.5664 0.733866 22.3744l18.295467-21.230933z m15.863467-2.193067l-26.922667 30.6688c7.645867 7.159467 14.5664 6.894933 23.338667-1.877333 5.290667-5.290667 9.762133-12.8512 11.3152-17.322667l8.2944 8.2944c-1.058133 4.1472-6.024533 11.8784-13.175467 19.0464-13.3376 13.320533-26.026667 16.093867-43.8528-1.723733-17.809067-17.809067-15.0528-30.506667-1.706667-43.844267 15.214933-15.2064 27.016533-9.762133 37.341867 0.5632 2.193067 2.210133 4.0704 4.4032 5.367467 6.1952zM520.567467 507.946667c-17.8176-17.809067-14.976-30.592-1.536-44.023467 4.539733-4.539733 9.258667-8.123733 12.842666-9.9072l8.704 8.704c-4.394667 1.962667-8.132267 4.7104-12.032 8.610133-8.4736 8.4736-8.635733 14.967467 2.602667 26.197334 11.0592 11.076267 17.408 10.914133 26.112 2.2016 3.6608-3.669333 6.826667-7.808 8.7808-12.202667l8.618667 8.618667c-1.706667 3.345067-5.930667 9.198933-10.077867 13.346133-13.422933 13.422933-26.197333 16.264533-44.014933-1.536M560.4864 440.3712l21.1456 21.162667c5.7088 5.6832 7.970133 6.1696 12.535467 1.604266 1.536-1.536 2.688-2.833067 3.584-4.3776l8.046933 8.055467c-1.467733 1.962667-3.182933 3.9936-5.051733 5.8624-10.487467 10.487467-16.913067 11.374933-28.4672-0.170667l-21.9648-21.9648-6.101334 6.109867-8.132266-8.149333 6.101333-6.101334-10.410667-10.410666 10.1632-10.171734 10.410667 10.410667 9.685333-9.6768 8.132267 8.1408-9.6768 9.6768zM614.724267 404.0192c-5.4528-5.444267-11.221333-8.951467-19.029334-1.1264-8.1408 8.1408-6.596267 14.557867 0.733867 22.357333l18.295467-21.230933z m15.863466-2.184533l-26.922666 30.677333c7.645867 7.150933 14.549333 6.912 23.3472-1.877333 5.282133-5.2992 9.770667-12.8512 11.3152-17.339734l8.2944 8.2944c-1.058133 4.155733-6.033067 11.886933-13.184 19.0464-13.346133 13.3376-26.026667 16.110933-43.844267-1.723733-17.8176-17.800533-15.061333-30.4896-1.723733-43.844267 15.223467-15.189333 27.025067-9.745067 37.341866 0.571734 2.2016 2.218667 4.087467 4.394667 5.376 6.1952zM668.782933 359.722667c-8.8576-8.866133-17.322667-12.603733-26.180266-3.746134-9.0368 9.028267-2.935467 17.092267 4.949333 24.968534 8.4736 8.465067 16.110933 13.6704 24.891733 4.881066 8.96-8.9344 5.7856-16.657067-3.6608-26.112z m-30.165333-49.544534l61.824 61.824-9.0368 9.028267-7.3984-5.444267c2.525867 5.930667 1.476267 13.021867-6.4256 20.906667-14.327467 14.318933-26.845867 8.7808-40.6016-4.9664-12.356267-12.373333-19.2768-26.2656-4.949333-40.593067 8.132267-8.132267 14.626133-9.096533 20.6592-6.510933l-24.157867-24.149333 10.0864-10.094934z"
        fill="#D70D26"/>
      <path
        d="M509.44 122.069333c-213.930667 0-387.362133 173.44-387.362133 387.3792 0 213.930667 173.431467 387.362133 387.362133 387.362134 213.930667 0 387.370667-173.44 387.370667-387.362134 0-213.9392-173.431467-387.3792-387.370667-387.3792z m0 9.6c208.64 0 377.770667 169.1392 377.770667 377.770667 0 208.64-169.130667 377.770667-377.770667 377.770667-208.631467 0-377.770667-169.1392-377.770667-377.770667S300.817067 131.669333 509.44 131.669333z"
        fill="#D70D26"/>
      <path
        d="M509.44 86.2208c-233.736533 0-423.2192 189.482667-423.2192 423.227733 0 233.728 189.482667 423.2192 423.2192 423.2192s423.227733-189.482667 423.227733-423.2192c0-233.745067-189.482667-423.227733-423.227733-423.227733z m0 4.804267c231.082667 0 418.423467 187.332267 418.423467 418.423466 0 231.082667-187.3408 418.414933-418.423467 418.414934S91.025067 740.5312 91.025067 509.448533c0-231.0912 187.332267-418.423467 418.414933-418.423466z"
        fill="#D70D26"/>
      <path
        d="M223.829333 474.504533l-0.418133 8.32-24.2432 16.5888-0.170667 3.498667 23.3472 1.194667-0.324266 6.434133-49.7152-2.491733 0.324266-6.459734 20.701867 1.0496 0.170667-3.515733-19.831467-18.449067 0.4096-8.004266 22.1184 21.504z"
        fill="#D70D26"/>
      <path
        d="M207.300267 444.066133c-6.1184-1.365333-11.707733-1.322667-13.294934 8.891734-1.732267 10.837333 2.850133 14.3616 10.9056 16.426666l2.389334-25.3184z m5.6576-5.981866l-3.328 32.3328c8.704 1.834667 13.2608-0.8704 15.061333-12.305067 0.802133-5.154133 0.657067-11.426133-0.256-15.3344l5.819733 1.28c0.759467 2.978133 0.930133 9.685333-0.136533 16.418133-2.184533 13.892267-8.226133 20.778667-24.081067 17.288534-15.854933-3.5072-19.387733-12.509867-17.28-25.949867 2.525867-16.085333 11.895467-16.904533 19.626667-15.189333 1.109333 0.238933 2.781867 0.785067 4.573867 1.450666zM240.913067 436.48c2.090667-6.408533 0.221867-9.898667-5.102934-13.6704l-41.5232 2.670933 2.082134-6.3232 34.184533-1.245866 0.136533-0.4096-27.016533-20.616534 1.928533-5.9392 31.223467 24.874667c8.055467 6.5024 12.680533 11.477333 9.130667 22.314667l-5.034667-1.655467zM243.3536 399.266133l-4.821333-2.244266c1.885867-2.141867 4.6336-6.314667 6.1184-9.506134 2.500267-5.316267 2.5088-8.721067-1.578667-10.6496-4.1472-1.937067-5.563733-1.169067-10.24 4.795734-5.393067 6.912-8.823467 7.825067-14.737067 5.060266-5.649067-2.653867-7.4752-8.738133-3.566933-17.041066 1.578667-3.3792 3.857067-6.903467 5.290667-8.2944l4.565333 2.6112a26.973867 26.973867 0 0 0-5.290667 7.748266c-2.304 4.923733-2.372267 7.9104 1.604267 9.770667 3.584 1.672533 4.923733 0.810667 8.721067-4.0704 5.589333-7.210667 9.1648-9.105067 15.9232-5.930667 6.954667 3.259733 7.9104 9.489067 3.8912 18.065067-1.578667 3.3792-4.386133 8.0128-5.888 9.685333M263.6288 351.291733l4.5056 2.679467a26.9568 26.9568 0 0 1-1.92 3.925333c-4.352 7.338667-7.7056 8.942933-16.469333 3.754667l-18.688-11.067733-2.926934 4.932266-4.437333-2.628266 2.9184-4.932267-7.893333-4.693333 3.1488-5.290667 7.893333 4.676267 4.8896-8.2688 4.445867 2.619733-4.906667 8.277333 18.397867 10.897067c5.179733 3.072 6.852267 3.063467 9.258666-1.024 0.887467-1.467733 1.339733-2.542933 1.792-3.857067M273.237333 315.665067c-9.284267-7.236267-14.0032-7.108267-19.2768 0.017066-5.393067 7.296-4.096 11.8272 5.205334 19.0464 9.275733 7.236267 13.9776 6.997333 19.2-0.042666 5.444267-7.389867 4.164267-11.776-5.12-19.0208m-18.2016 24.610133c-12.6464-9.8304-12.398933-18.295467-5.316267-27.895467 7.1424-9.6512 14.933333-12.032 27.562667-2.193066 12.654933 9.838933 12.509867 18.158933 5.376 27.8272-7.099733 9.582933-14.984533 12.100267-27.6224 2.261333M283.588267 273.425067l3.8656 4.061866-0.597334 0.605867c-3.447467 3.549867-5.6576 8.209067-2.193066 14.5408l18.176 17.595733-4.292267 4.4288-27.810133-26.922666 4.292266-4.4288 5.034667 4.8896c-2.926933-6.2464-0.221867-10.897067 3.029333-14.242134l0.494934-0.529066zM320.512 264.362667c-3.882667-4.864-8.081067-8.456533-14.702933-2.816-6.997333 5.998933-5.461333 11.272533-0.503467 17.851733l15.197867-15.0272z m7.406933-0.238934l-19.626666 19.029334c5.563733 6.843733 10.410667 8.0384 17.8176 1.706666 3.336533-2.850133 6.528-7.057067 7.918933-10.205866l3.6864 4.608c-1.006933 2.440533-4.437333 6.954667-8.789333 10.666666-8.994133 7.68-17.1776 8.2688-27.204267-4.3008-10.0352-12.5952-7.918933-20.778667 0.785067-28.2112 10.410667-8.8832 17.8688-3.3536 22.741333 2.781867 0.725333 0.861867 1.681067 2.338133 2.670933 3.925333zM343.748267 270.0032c-2.167467-3.208533-1.4592-4.369067 1.339733-6.237867 2.747733-1.834667 4.155733-2.082133 6.306133 1.143467 2.218667 3.3536 1.450667 4.5312-1.28 6.3744-2.798933 1.8688-4.1472 2.065067-6.365866-1.28M349.934933 247.560533c-7.424-13.508267-3.925333-20.727467 6.058667-26.205866a33.5872 33.5872 0 0 1 9.557333-3.6096l2.730667 4.9664a28.253867 28.253867 0 0 0-9.642667 3.319466c-7.4752 4.096-8.379733 8.439467-2.884266 18.432 5.4016 9.8816 9.514667 11.374933 17.058133 7.253334 3.191467-1.7664 6.1696-3.950933 8.064-6.314667l2.722133 4.9664c-1.5104 1.732267-5.085867 4.437333-8.302933 6.1952-9.984 5.469867-17.954133 4.522667-25.361067-9.002667M412.322133 220.296533c-4.736-10.845867-9.198933-13.184-17.911466-9.898666-8.942933 3.387733-10.1632 7.842133-5.444267 18.7136 4.727467 10.837333 9.233067 13.064533 17.877333 9.8048 9.002667-3.387733 10.205867-7.765333 5.4784-18.619734m-30.1568 11.349334c-6.4256-14.7456-1.664-21.76 10.0864-26.197334 11.8272-4.4544 20.352-2.4576 26.794667 12.322134 6.434133 14.762667 1.800533 21.700267-10.001067 26.146133-11.758933 4.437333-20.4288 2.5088-26.88-12.270933M478.429867 196.113067l4.9152 26.282666-6.058667 1.143467-4.497067-24.1152c-1.092267-5.845333-3.3536-8.925867-9.0624-7.8592-4.437333 0.827733-7.995733 2.816-8.618666 8.533333l0.0512 0.2816 4.932266 26.368-6.0672 1.134934-4.497066-24.1152c-1.092267-5.845333-3.131733-8.96-8.704-7.927467-4.718933 0.878933-7.978667 2.5856-8.797867 8.789333l4.949333 26.436267-6.058666 1.134933-7.108267-38.058666 6.058667-1.134934 0.938666 5.000534c1.476267-4.957867 5.3504-6.912 9.915734-7.765334 5.998933-1.117867 9.898667 0.631467 12.228266 4.155734 1.3312-5.376 6.033067-7.552 10.683734-8.430934 8.874667-1.664 13.431467 2.816 14.7968 10.146134"
        fill="#D70D26"/>
      <path
        d="M631.2704 247.842133L247.850667 631.2704a38.212267 38.212267 0 0 0 0 53.896533l85.870933 85.870934a38.212267 38.212267 0 0 0 53.888 0l383.428267-383.428267a38.229333 38.229333 0 0 0 0-53.905067L685.166933 247.850667a38.212267 38.212267 0 0 0-53.896533 0z m49.390933 4.5056l85.870934 85.8624a31.8464 31.8464 0 0 1 0 44.893867L383.104 766.532267a31.829333 31.829333 0 0 1-44.885333 0L252.3648 680.661333a31.829333 31.829333 0 0 1 0-44.885333l383.428267-383.419733a31.829333 31.829333 0 0 1 44.8768 0z"
        fill="#D70D26"/>
      <path
        d="M401.237333 401.237333c-27.400533 27.400533-42.0864 62.600533-44.356266 98.4576l8.465066-8.4736a144.597333 144.597333 0 0 1 41.301334-84.565333 144.631467 144.631467 0 0 1 84.565333-41.301333l8.482133-8.482134c-35.848533 2.2784-71.057067 16.964267-98.4576 44.3648M612.241067 612.241067a144.6144 144.6144 0 0 1-84.573867 41.284266l-8.4736 8.482134c35.848533-2.2784 71.057067-16.955733 98.4576-44.356267 27.400533-27.392 42.069333-62.6176 44.347733-98.4576l-8.456533 8.4736a144.631467 144.631467 0 0 1-41.301333 84.573867"
        fill="#D70D26"/>
      <path
        d="M300.398933 556.177067c-15.402667-69.137067 3.754667-144.418133 57.540267-198.229334 53.8112-53.802667 129.092267-72.942933 198.2464-57.557333l12.6464-12.6464c-76.561067-20.437333-161.629867-0.6656-221.696 59.392-60.066133 60.0576-79.8208 145.1264-59.392 221.696l12.654933-12.654933zM718.498133 462.702933c15.377067 69.154133-3.754667 144.4352-57.565866 198.237867-53.794133 53.8112-129.083733 72.942933-198.229334 57.557333l-12.6464 12.637867c76.5696 20.437333 161.629867 0.682667 221.696-59.383467 60.074667-60.074667 79.8208-145.1264 59.392-221.696l-12.6464 12.6464z"
        fill="#D70D26"/>
    </SvgIcon>
  )
};

export default RejectEnUs;